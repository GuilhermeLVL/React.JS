import React from "react";

import produtos from "../../data/produtos";

export default props => {
    function getPodutos() {
        return produtos.map(prod =>{
            return <li key={prod.id}> {prod.id} - {prod.nome} ->R$ {prod.preco}</li>
        })
    }

    return(

        <div>
            <h2>Repeticao</h2>
            <ul>
                {getPodutos()}
            </ul>
        </div>
    )
}