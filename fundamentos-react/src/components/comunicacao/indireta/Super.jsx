import React, {useState} from "react";
import Sub from './Sub'

export default props =>
{
    const [texto, setTexto] = useState(0)
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado){
      setNum(valorGerado)
    }
    return(
        <div>
<h4>Valor:{num}</h4>
<Sub quandoClicar={quandoClicar}></Sub>
</div>
    )
}
