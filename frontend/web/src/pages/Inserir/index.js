import React, { useState } from 'react';
import Menu from '../../components/Menu/index.js'

import './inserir.css'

import ListaNegraApi from '../../services/ListaNegraApi'
const funcaoApi =  new ListaNegraApi();

export default function Insrir(){
    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");
    const [local, setLocal] = useState("");
    const [inclusao, setInclusao] = useState();

    const [registro, setRegistro] = useState([]);

    const clickCadastro = async (novo) => {
        const result = await funcaoApi.cadastrar({
            nome: nome,
            motivo: motivo,
            local: local,
            inclusao: inclusao
        });
        
        setRegistro(...[result]);
    } 

    return (
        <div className = "inserir">
            <Menu />
            <main>
                <h1>Cadastrar Lista Negra</h1>
                <form>
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

                    <button id = "inserir" onClick = {clickCadastro}>Inserir</button>
                </form>
            </main>
        </div>
    );
}