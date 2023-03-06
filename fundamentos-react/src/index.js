import './index.css'
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';


ReactDOM.render(

    <>
    {/*
    <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Amanda</li>
            <li>Carlos</li>
        </ul>
    </ComFilhos>
     <Primeiro/>
    <ComParametro titulo="Esse e o titulo"
    subtitulo="Esse e o subtitulo"/>
    */}
    
    <Card titulo="Primeiro Componente"> 
    <Primeiro/>
    </Card>

    <Card titulo="Exercicio"> 
        Conteudo
    </Card>

    </>,document.getElementById('root')
)