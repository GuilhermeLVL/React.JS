import React,{useState} from 'react'

  export default function App(){

    const [nome,setNome]= useState('')
   
  return(
<>
<label>Digite seu nome</label>
<input type='text' name='fnome' value={nome} onChange={(e) => setNome(e.target.value)}></input>
<p>Nome digitado:{nome} </p>
</>

);
}
