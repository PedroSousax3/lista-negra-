import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';

import './home.css';

import Menu from '../../components/Menu/index';

import ListaNegraApi from '../../services/ListaNegraApi.js';
const funcaoApi = new ListaNegraApi();

export default function Home(){

    const [nome, setNome] = useState("");
    const [registros, setRegistros] = useState([]); 

    const consultarNome = async (nome) => {
        const result = await funcaoApi.consultarPorNome(nome);
        setRegistros([...result]);      
    }

    const consultarTodo = async () => {
        const result = await funcaoApi.consultar();
        setRegistros([...result]);      
    }

    const deletar = async (id) => {
        await funcaoApi.deletarPorId(id);
        consultarTodo();
        toast.success("Pessoa foi deletada com sucesso!!!");
        consultarTodo();
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
                    <input type = "text" 
                    placeholder = "Consultar por nome" 
                       onChange = {x => setNome(x.target.value)} 
                    />

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
                                <td>
                                    <Link to = "/Alterar" id = {() => deletar(x.id.target.value)}>
                                        alterar
                                    </Link>
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