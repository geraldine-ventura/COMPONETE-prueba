import React,{Fragment, useStates} from 'react';
 
const ComponentePrueba = () => {

const [colores, setNumero] = useStates(["red", "yelow","green"]);

//crear una funcion
const elegirColores =() => {
    console.log ("se dio un click color");
    setNumero( colores[])
}




    return ( 
     <Fragment>
        <h2> "mi comp de prueba numero 3"</h2>
     <button> onClick={elegirColores} colores rgb </button>
     </Fragment>
        );
 }
  
 export default ComponentePrueba;