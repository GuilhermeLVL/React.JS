import React from "react";
import './App.css'

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
    <h1 style={{color:'red',fontSize:'2em'}}>Ola mundo</h1>
    <h2 style={textoDestaque}>Curso de react</h2>
    <p className="texto">asdasdasdasdasdasdasdasd</p>
    </section>
</>
  )
}
