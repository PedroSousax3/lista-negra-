//Frameworks:
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

//Components:
import Menu from '../../components/Menu/index.js';

//Styles:
import './inserir.css';
import 'react-toastify/dist/ReactToastify.css';

//functions:
import ListaNegraApi from '../../services/ListaNegraApi'

//Instancias:
const funcaoApi =  new ListaNegraApi();

export default function Insrir(){
    const [nome, setNome] = useState("");
    const [motivo, setMotivo] = useState("");
    const [local, setLocal] = useState("");
    const [inclusao, setInclusao] = useState();

    const clickCadastro = async () => {
        await funcaoApi.cadastrar({
            nome: nome,
            motivo: motivo,
            local: local,
            inclusao: inclusao
        });
        toast.success("Pessoa foi cadastrada com sucesso!!!");
    } 

    return (
        <div className = "inserir">
            <Menu />
            <main>
                <h1>Cadastrar Lista Negra</h1>
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
                        value = {motivo}
                        onChange = {e => setLocal(e.target.value)}
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

                    <button id = "inserir" onClick = {clickCadastro}>Inserir</button>
                </div>
            </main>

            <ToastContainer />
        </div>
    );
}