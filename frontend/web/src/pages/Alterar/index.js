import './alterar.css';

import React, { useState } from  'react';
import Menu from '../../components/Menu/index.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../services/ListaNegraApi'
const funcaoApi =  new ListaNegraApi();

export default function Alterar(props){

    const [id] = useState(props.location.state.id);
    const [nome, setNome] = useState(props.location.state.nome);
    const [motivo, setMotivo] = useState(props.location.state.motivo);
    const [local, setLocal] = useState(props.location.state.local);
    const [inclusao, setInclusao] = useState(props.location.state.inclusao.substr(0, 10));

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
                    <select
                        value = {local} 
                        onChange = {x => setLocal(x.target.value)} 
                    >
                        <option value = "Casa">Casa</option>
                        <option value = "Trabalho">Trabalho</option>
                        <option value = "Escola">Escola</option>
                        <option value = "Familia">Outro</option>
                    </select>

                    <label>Data de Inclusão:</label>
                    <input type = "date" 
                          value = {inclusao} 
                       onChange = {x => setInclusao(x.target.value)}
                    />

                    <button id = "alterar" onClick = {clickAlterar}>Alterar</button>
                </div>
            </main>

            <ToastContainer />

        </div>
    );
}