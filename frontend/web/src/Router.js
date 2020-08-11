import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index.js';
import Inserir from './pages/Inserir/index.js';

export default function Rotas(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact = {true} component = {Home} />
                <Route path = "/Consultar" component = {Home} />
                <Route path = "/Cadastrar" component = {Inserir} />
            </Switch>
        </BrowserRouter>
    );
}