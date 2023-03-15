import React from "react";
import './App.css'

  export default function App(){
const textoDestaque ={
   color:'#00f',
   fontSize:'3em',
   backgroundColor:'purple'
}

  return(
<>
    <h1 style={{color:'red',fontSize:'3em'}}>Ola mundo</h1>
    <h2 style={textoDestaque}>Curso de react</h2>
    <p className="texto">asdasdasdasdasdasdasdasd</p>
</>
  )
}
