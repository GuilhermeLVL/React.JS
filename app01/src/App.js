import React,{useState} from 'react'

import ledVerde from './componentes/imgs/ledverde.jpg'
import ledVermelho from './componentes/imgs/lervermelho.jpg'

  export default function App(){

    const [ligado,setLigado] = useState(false)

   

  return(
<>
<h1>Ola mundo</h1>
<img style={{width:'50px'}} src={ligado?ledVerde:ledVermelho}/>

<button onClick={()=>setLigado(!ligado)}>{ligado?'Ligado':'Desligado'}</button>
</>
  )
}
