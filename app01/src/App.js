import React,{useState} from "react";
import './App.css'

  export default function App(){

const[num, setNum] = useState(10)

let n1 = 10

  return(
<>
  <p>Valor do state num:{n1}</p>
</>
  )
}
