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
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega";

export default (props) => (
    <div className="App">

<Card titulo="#11 - Mega" color="#ddc0e4">
    <Mega qtdeNumeros={8}></Mega>
        </Card>

<Card titulo="#10 - Contador" color="#5c4b26">
    <Contador passo={10} ></Contador>
        </Card>

<Card titulo="#09 - Input" color="#555c26">
    <Input></Input>
        </Card>

<Card titulo="#08 - Comunicacao indireta" color="#275c26">
    <Super></Super>
        </Card>

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