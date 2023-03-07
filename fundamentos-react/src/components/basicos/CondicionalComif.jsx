import React from "react";
import _if from "./If";

export default props =>{

    return (
        <div>
            <h2>O numero e {props.numero}</h2>

            <_if test = {props.numero % 2 === 0}>
                <span>Par</span>
            </_if>

            <_if test = {props.numero % 2 === 1}>
                <span>Impar</span>
            </_if>
         
            
            
        </div>
    )
}