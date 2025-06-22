import React, { useEffect, useState } from "react";
import { Button } from './Button';
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
    <p>{nombre}</p>
    { nombre?
      <p>!Nuevo planeta {nombre} descubierto!</p>:
      <Formulario onSubmit={handledName}/>
    }
    </>
);
}

