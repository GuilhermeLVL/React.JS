import React from "react";
import './App.css'
import Relogio from "./componentes/Relogio";

  export default function App(){
const textoDestaque ={
   color:'#00f',
   fontSize:'1.9em',
   backgroundColor:'purple',
   borderRadius: '50px'
}

  return(
<>
    <section className="caixa">
      <Relogio ></Relogio>
    <h1 style={{color:'red',fontSize:'2em'}}>Ola mundo</h1>
    <h2 style={textoDestaque}>Curso de react</h2>
    <p className="texto">asdasdasdasdasdasdasdasd</p>
    <a href="">Paradoxo</a>
    </section>
</>
  )
}
