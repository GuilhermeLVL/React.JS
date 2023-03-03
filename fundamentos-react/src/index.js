import './index.css'
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';

ReactDOM.render(

    <>
    <Primeiro/>
    <ComParametro titulo="Esse e o titulo"
    subtitulo="Esse e o subtitulo"/>
    </>
    ,
    document.getElementById('root')
)