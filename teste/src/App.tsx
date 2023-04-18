import React from 'react'
import './App.css'

function App() {

 function getCordenadas(e:React.MouseEvent<HTMLElement>){
  console.log(e)
 }
  return <div className="App" onClick={getCordenadas}></div>


  }


export default App
