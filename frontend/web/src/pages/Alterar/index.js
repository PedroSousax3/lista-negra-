import './alterar.css';

import React, { useState } from  'react';
import Menu from '../../components/Menu/index.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../services/ListaNegraApi'
const funcaoApi =  new ListaNegraApi();

export default function Alterar(){

    const [id, setId] = useState();

    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");
    const [local, setLocal] = useState("");
    const [inclusao, setInclusao] = useState();

    const clickAlterar = async () => {
        await funcaoApi.Alterar(id, {
            nome: nome,
            motivo: motivo,
            local: local,
            inclusao: inclusao
        });

        toast.success("Pessoa foi alterada com sucesso!!!");
    }  


    return (
        <div className = "Alterar">
            <Menu />

            <main>
                <h1>Alterar Lista Negra</h1>
                <div className = "form">
                    <label>Id:</label>
                    <input type = "number"
                            min = "1"
                          value = {id} 
                       onChange = {x => setId(Number(x.target.value))}
                    />

                    <label>Nome:</label>
                    <input type = "text" 
                      minLength = "1" 
                          value = {nome} 
                       onChange = {x => setNome(x.target.value)}
                    />

                    <label>Motivo:</label>
                    <input type = "text" 
                      minLength = "1" 
                          value = {motivo} 
                       onChange = {x => setMotivo(x.target.value)} 
                    />

                    <label>Local onde se conheceram:</label>
                    <input type = "text" 
                      minLength = "1" 
                          value = {local} 
                       onChange = {x => setLocal(x.target.value)} 
                    />

                    <label>Data de Inclusão:</label>
                    <input type = "date" 
                          value = {inclusao} 
                       onChange = {x => setInclusao(x.target.value)}
                    />

                    <button id = "inserir" onClick = {clickAlterar}>Alterar</button>
                </div>
            </main>

            <ToastContainer />
        </div>
    );
}