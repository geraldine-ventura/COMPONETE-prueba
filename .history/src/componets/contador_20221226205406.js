import React, {Fragment, useState} from "react";

const Contador = () => {
//nombre de estado, el que lo mod//

const [numero, setNumero]= useState(4);

    return (  
    <Fragment>
        <h3> mi seg titulo de componente {numero}.</h3>
        <button> aumentar</button>
    </Fragment>
        );
}
export default Contador ;