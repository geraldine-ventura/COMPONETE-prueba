import React, {Fragment, useState} from "react";

const Contador = () => {
//nombre de estado, el que lo mod//

   const [numero, setNumero]= useState(4);

   //crear una funcion//
   const aumentar = () => {
    console.log("me diste un click");
    setNumero (numero +1)
   }

    return (  
    <Fragment>
        <h3> mi seg titulo de componente {numero}.</h3>
        <button onClick={}> Aumentar</button>
    </Fragment>
        );
}
export default Contador ;