import React,{useState} from 'react'

  export default function App(){

    const [nome,setNome]= useState(' ')



    const hanleChangeNome = (e) => {
      setNome(e.target.value) 
    }


  return(
<>
<label>Digite seu nome</label>
<input type='text'
 name='fnome'
  value={nome} 
  onChange={(e) => hanleChangeNome(e)}></input>
<p>Nome digitado:{nome}
ola </p>
</>

);
}
