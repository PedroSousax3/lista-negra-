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
    const [nome, setNome] = useState(" ");
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

                <button
                    className="btn btn-primary" 
                    onClick={consultarTodo}>
                    Listar
                </button>

                <div className="input-group mb-3">
                    
                    <input type="text" 
                      className="form-control" 
                    placeholder="Recipient's username" 
                     aria-label="Recipient's username" 
               aria-describedby="button-addon2"
                      onChange = {x => setNome(x.target.value)}  
                    />

                    <div className="input-group-append">
                        <button className="btn btn-primary" 
                                 onClick = {consultarNome} 
                                       id="button-addon2">
                            Consultar
                        </button>
                    </div>
                </div>

                {/*<table className = "table">
                    <thead>
                        <tr>
                            <th scope="col">Perfil</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Motivo</th>
                            <th scope="col">Local</th>
                            <th scope="col">Data de Inclusão</th>
                            <th scope="col">Remover</th>
                            <th scope="col">Alterar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map(x => 
                            <tr key = {x.id}>
                                <td><img src = {funcaoApi.consultarImagem(x.foto)} height = "50px" alt = "Perfil"/></td>
                                <td>{x.nome}</td>
                                <td>{x.motivo}</td>
                                <td>{x.local}</td>
                                <td>{new Date(x.inclusao + "Z").toLocaleString()}</td>
                                <td>
                                    <button className="btn btn-danger" onClick = {() => deletar(x)}>
                                        Deletar
                                    </button>
                                </td>
                                <td>
                                    <Link className="btn btn-link" to = {{
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
                </table>*/}

                <div className="card-columns">
                {registros.map(x => 
                    <div className="card">
                        <img className="card-img-top" src = {funcaoApi.consultarImagem(x.foto)} alt = "Perfil" />
                        <div className="card-body" key = {x.i}>
                            <h5 className="card-title">{x.nome}</h5>
                                <p className="card-text">Motivo: {x.motivo}</p>
                                <p className="card-text">Onde se conheceram: {x.local}</p>
                                <p className="card-text">Data:{x.inclusao}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                <button className="btn btn-danger" onClick = {() => deletar(x)}>
                                    Deletar
                                </button>

                                <Link className="btn btn-link" 
                                            to = {{
                                            pathname: "/Alterar",
                                            state: {
                                                id: x.id,
                                                nome: x.nome,
                                                motivo: x.motivo,
                                                local: x.local,
                                                inclusao: x.inclusao
                                            }}}>
                                    Alterar
                                </Link>
                            </small>
                        </div>
                    </div>
                )}
                </div>
            </main>

            <ToastContainer />
        </div>
    );
}