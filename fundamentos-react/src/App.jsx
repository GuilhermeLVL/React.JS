import React from "react";

import './App.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComif from "./components/basicos/CondicionalComif";
import Pai from "./components/comunicacao/direta/Pai";

export default (props) => (
    <div className="App">

<Card titulo="#07 - Comunicacao direta" color="#26485c">
    <Pai></Pai>
        </Card>
<Card titulo="#06 - Condicional Com IF V2" color="#FA6900">
    <CondicionalComif numero={11} ></CondicionalComif>
        </Card>

<Card titulo="#05 - Condicional V1" color="#E94C6F">
    <Condicional numero={10}></Condicional>
        </Card>

<Card titulo="#04 - Reoeticao" color="#3cf7c7">
 <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente Com Filhos" color="#f73cc7">
        <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Amanda</li>
            <li>Carlos</li>
        </ul>
    </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parametro" color="#c7f73c">
<ComParametro titulo="Esse e o titulo"
    subtitulo="Esse e o subtitulo"/>
        </Card>

    
    <Card titulo="#01 - Primeiro Componente" color="#f7c73c"> 
    <Primeiro/>
    </Card>

    <Card titulo="Exercicio" color="#5d4b17"> 
        Conteudo
    </Card>

    </div>

)