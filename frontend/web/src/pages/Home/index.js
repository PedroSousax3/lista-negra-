import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

import './home.css';

import Menu from '../../components/Menu/index';

import ListaNegraApi from '../../services/ListaNegraApi.js';
const funcaoApi = new ListaNegraApi();

export default function Home(){

    const [nome, setNome] = useState("");
    const [id, setId] = useState();
    const [registros, setRegistros] = useState([]); 
    const [registro, setRegistro] = useState(); 

    const consultarTodo = async () => {
        ref.current.continuousStart();
        const result = await funcaoApi.consultar();
        setRegistros([...result]);
        ref.current.complete();        
    }

    const consultarNome = async (nome) => {
        const result = await funcaoApi.consultarPorNome(nome);
        setRegistros([...result]);      
    }

    const deletar = async (id) => {
        await funcaoApi.deletarPorId(id);
        consultarTodo();
        toast.success("Pessoa foi deletada com sucesso!!!");
    }


    const ref = useRef(null);

    return (
        <div className = "home">
            <LoadingBar color='#d61d2b' ref={ref} />

            <Menu />
            <main>

                <h1 className = "titulo">
                    Consultar
                </h1>
                <button className="listar" onClick={consultarTodo}>
                    Consultar Lista Negra
                </button>

                <div>
                    <input placeholder = "Consultar por nome" type = "text" onChange = {x => setNome(x.target.value)} />
                    <button onClick = {consultarNome(nome)}>
                        Consultar
                    </button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Nome</th>
                            <th>Motivo</th>
                            <th>Local</th>
                            <th>Data de Inclusão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map(x => 
                            <tr key = {x.id}>
                                <td>{x.id}</td>
                                <td>{x.nome}</td>
                                <td>{x.motivo}</td>
                                <td>{x.local}</td>
                                <td>{x.inclusao}</td>
                                <td>
                                    <button onClick = {() => deletar(x.id)}>
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>

            <ToastContainer />
        </div>
    );
}