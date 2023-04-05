import React,{useState} from 'react'

  export default function App(){

    const carros = ['A1233','B3213','C4324','D23123','E42342','F31231','G234234','H123','I13213']

    const listaCarros = carros.map(
      
      (c) => <p>{c}</p>
    )
  return(
<>

{listaCarros}
</>

);
}
