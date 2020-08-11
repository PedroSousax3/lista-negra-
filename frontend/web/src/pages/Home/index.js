import React, { useState } from 'react';
import axios from 'axios';

import './home.css';

import Menu from '../../components/Menu/index';

import ListaNegraApi from '../../services/ListaNegraApi.js';
const funcaoApi = new ListaNegraApi();

export default function Home(){

    const [nome, setNome] = useState("");
    const [registro, setRegistro] = useState([]); 

    const consultarTodo = async () => {
        const result = await funcaoApi.consultar();
        setRegistro([...result])
    }

    const botaoConsultarNome = async (nome) => {
        const result = await funcaoApi.consultarPorNome(nome);
        setRegistro([...result])
    }

    return (
        <div className = "home">
            <Menu />
            <main>

                <h1 className = "titulo">
                    Consultar
                </h1>

                <section>

                    <form>

                        <button className = "listar" onClick = {consultarTodo}>
                            Consultar Lista Negra
                        </button>

                        <fieldset>

                            <input type = "text"  
                                  value = {nome} 
                               onChange = {x => setNome(x.target.value)}
                            />

                            <button className="listarnome" onClick={botaoConsultarNome(nome)}>
                                Consultar
                            </button>

                        </fieldset>

                    </form>

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
                            {registro.map(x => 
                                <tr key = {x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.nome}</td>
                                    <td>{x.motivo}</td>
                                    <td>{x.local}</td>
                                    <td>{x.inclusao}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </section>
            </main>
        </div>
    );
}