import React from "react";

import './App.css'
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from "./components/layout/Repeticao";
import Condicional from "./components/layout/Condicional";
import CondicionalComif from "./components/layout/CondicionalComif";

export default (props) => (
    <div className="App">

<Card titulo="#06 - Condicional Com IF V2">
    <CondicionalComif numero={11}></CondicionalComif>
        </Card>

<Card titulo="#05 - Condicional V1">
    <Condicional numero={10}></Condicional>
        </Card>

<Card titulo="#04 - Reoeticao">
 <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente Com Filhos">
        <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Amanda</li>
            <li>Carlos</li>
        </ul>
    </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parametro">
<ComParametro titulo="Esse e o titulo"
    subtitulo="Esse e o subtitulo"/>
        </Card>

    
    <Card titulo="#01 - Primeiro Componente"> 
    <Primeiro/>
    </Card>

    <Card titulo="Exercicio"> 
        Conteudo
    </Card>

    </div>

)