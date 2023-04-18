import React, { useState }from 'react'
import './App.css'

interface ClikedProps {
  clientX: Number
  clientY: Number
}

function App() {

  const [clickPoints, setClickPoints] = useState<ClikedProps[]>([])

 function getCordenadas(e: React.MouseEvent<HTMLElement>){
  const {clientX, clientY} = e

  setClickPoints([...clickPoints, { clientX, clientY }])
 }
  return (
  <>
  <button>Desfazer</button>
  <div className="App" onClick={getCordenadas}>
    {clickPoints.map((clickPoints)=> {
      return <div 
      style={{left:clickPoints.clientX -6,
         top:clickPoints.clientY -6,
          position:'absolute',
          borderRadius:'50%',
          backgroundColor:'red',
          width:'10px',
          height:'10px',
        }}></div>
    })}
  </div>
  </>
  )

  }


export default App
