import React from "react";

import img01 from  './componentes/imgs/frango.pgn.jpg'
import img02 from  './componentes/imgs/orange.png.jpg'
  export default function App(){

    const canal = () =>{
      return('CFB Cursos')
    }
   
    const curso = `Curso de React`
  return(
    <>
    <p>{'Canal: '+canal()} </p>

    <br/>

    <p>{curso}</p>
    </>
  )
}
