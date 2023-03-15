import React from "react";
import Dados from "./Dados";
export default function Corpo(){

    const cnl = () => {
        return'asdasd'    
    } 


    const yt = 'dsdsds'
    const crs = 'xsxasxas'

    const somar = (v1,v2) =>{

        return v1 + v2
    }

    return (    
<section>
    <h2>Palavras do frango boladao:</h2>
    <p> Piu..  Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.</p>
    <p> Piu..  Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.Piu.</p>

    <Dados canal={cnl} youtube={yt} curso={crs} somar={somar}></Dados>

</section>
    )
}