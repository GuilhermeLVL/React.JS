import { useState } from "react";
import React from "react";
import "./Calculadora.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculadora() {
  
  const [num,setNum] =useState(0);

  function inputNum(e){
    var input =  e.target.value;
    if(num === 0){
      setNum(input);
    }else{
      setNum(num + input)
    }


  }

  function clear(e){
    setNum(0)
  }

  function porcentagem(){
    setNum(num/100)
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12}/>
          <h1 className="resultado">{num}</h1>
          <button onClick={clear}>AC</button>
          <button>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="orange">/</button>

          <button className="gray" onClick={inputNum} value={7}>7</button>
          <button className="gray" onClick={inputNum} value={8}>8</button>
          <button className="gray" onClick={inputNum} value={9}>9</button>
          <button className="orange">X</button>

          <button className="gray" onClick={inputNum} value={4}>4</button>
          <button className="gray" onClick={inputNum} value={5}>5</button>
          <button className="gray" onClick={inputNum} value={6}>6</button>
          <button className="orange">-</button>

          <button className="gray" onClick={inputNum} value={1}>1</button>
          <button className="gray" onClick={inputNum} value={2}>2</button>
          <button className="gray" onClick={inputNum} value={3}>3</button>
          <button className="orange">+</button>

          <button className="gray">0</button>
          <button className="gray">,</button>
          <button className="gray" style={{visibility:"hidden"}}>,</button>
          <button className="orange">=</button>
        </div>
      </Container>
    </div>
  );
}
