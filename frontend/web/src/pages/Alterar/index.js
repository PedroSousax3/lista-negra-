import React, { useState } from 'react';
import Menu from '../../components/Menu/index.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './inserir.css'

import ListaNegraApi from '../../services/ListaNegraApi'
const funcaoApi =  new ListaNegraApi();

export default function Alterar(){
    
    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");
    const [local, setLocal] = useState("");
    const [inclusao, setInclusao] = useState();

    const [registro, setRegistro] = useState([]);

    const clickAlterar = async (novo ) => {
        const result = await funcaoApi.Alterar({
            nome: nome,
            motivo: motivo,
            local: local,
            inclusao: inclusao
        });
        
        setRegistro(...[result]);

        toast.success("Pessoa foi alterada com sucesso!!!");
    } 

    return (
        <div className = "inserir">
            <Menu />
            <main>
                <h1>Alterar Lista Negra</h1>
                <div className = "form">
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

                    <button id = "inserir" onClick = {clickAlterar}>Inserir</button>
                </div>
            </main>

            <ToastContainer />
        </div>
    );
}