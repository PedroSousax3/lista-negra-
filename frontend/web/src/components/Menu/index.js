import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';


import './menu.css';

export default function Menu(){
    return (
        <div className = "menu">
            <header id = "menu-cima">
                <Link to = "/">
                    <img src = {logo} alt = "BLACKLIST"/>
                </Link>
            </header>
            <header id = "menu-baixo">
                <Link to = "/">
                    CONSULTAR
                </Link>
                <Link to = "/Cadastrar">
                    CADASTRAR
                </Link>
            </header>
        </div>
    );
}