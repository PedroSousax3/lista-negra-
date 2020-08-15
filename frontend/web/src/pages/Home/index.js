//Frameworks:
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';

//Styles:
import 'react-toastify/dist/ReactToastify.css';
import './home.css';

//Components:
import Menu from '../../components/Menu/index';

//functions:
import ListaNegraApi from '../../services/ListaNegraApi.js';

//Instancias:
const funcaoApi = new ListaNegraApi();

export default function Home(){
    const [nome, setNome] = useState("");
    const [registros, setRegistros] = useState([]); 

    //loanding - Bar
    const ref = useRef(null);

    const consultarNome = async () => {
        ref.current.continuousStart()

        const result = await funcaoApi.consultarPorNome(nome);
        setRegistros([...result]);  

        ref.current.complete()  
    }

    const consultarTodo = async () => {
        ref.current.continuousStart()

        const result = await funcaoApi.consultar();
        setRegistros([...result]);
        
        ref.current.complete()  
    }

    const deletar = async (item) => {
        await funcaoApi.deletarPorId(item.id);
        toast.success(`${item.nome} foi deletada com sucesso!!!`);
        consultarTodo();
    }

    return (
        <div className = "home">

            <LoadingBar color='#f11946' ref={ref} />
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

                    <button onClick = {consultarNome}>
                        Consultar
                    </button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Motivo</th>
                            <th>Local</th>
                            <th>Data de Inclusão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map(x => 
                            <tr key = {x.id}>
                                <td>{x.nome}</td>
                                <td>{x.motivo}</td>
                                <td>{x.local}</td>
                                <td>{new Date(x.inclusao + "Z").toLocaleString()}</td>
                                <td>
                                    <button onClick = {() => deletar(x)}>
                                        Deletar
                                    </button>
                                </td>
                                <td>
                                    <Link to = {{
                                        pathname: "/Alterar",
                                        state: {
                                            id: x.id,
                                            nome: x.nome,
                                            motivo: x.motivo,
                                            local: x.local,
                                            inclusao: x.inclusao
                                        }
                                    }}>
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