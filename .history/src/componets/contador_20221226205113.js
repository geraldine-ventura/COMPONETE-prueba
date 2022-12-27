import React, {useState} from "react";

const Contador = () => {
//nombre de estado, el que lo mod//

const [numero, setNumero]= useState(4);

    return (  
        <h3> mi seg titulo de componente {numero}.</h3>
    );
}
export default Contador ;