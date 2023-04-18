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
  return <div className="App" onClick={getCordenadas}>
    {clickPoints.map((clickPoints)=> {
      return <div 
      style={{left:clickPoints.clientX,
         top:clickPoints.clientY,
          position:'absolute',
          borderRadius:'50%',
          color:'red',
          width:'3px',
          height:'3px',
        }}>0</div>
    })}
  </div>


  }


export default App
