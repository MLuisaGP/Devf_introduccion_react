import React, { useEffect, useState } from "react";
import { Formulario } from "./Formulario";

export default function Planeta() {
  const [nombre,setNombre]=useState('');

  useEffect(() => {
    console.log(`¡Un nuevo planeta ha aparecido!`); // Montaje

    return () => {
        console.log(`¡Un nuevo planeta ha desaparecido!`); // Desmontaje

    };
  }, []);

  const handledName = (nuevoNombre)=>{
    console.log('click');
    setNombre(nuevoNombre);
    
  }



  return (
    <>
    { nombre?
      <h2>!Nuevo planeta {nombre} descubierto!</h2>:
      <Formulario onSubmit={handledName}/>
    }
    </>
);
}

