import React from "react";
import Sub from './Sub'

export default props =>
{

    function quandoClicar(valorGerado){
        console.log('acao!!!!!!')
        console.log(valorGerado)
    }
    return(
        <div>
<h4>Valor</h4>
<Sub quandoClicar={quandoClicar}></Sub>
</div>
    )
}
