import { useState } from "react";
import { Button } from "./Button";

export function Formulario({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const handleClick = () => {
    console.log('click');
    
    if(nombre.trim()){
        onSubmit?.(nombre);
    }else{
        alert("Por favor ingresa un nombre para el planeta.")
    }
  };
  return (
    <>
      <label htmlFor="nombre">Nombre Planeta</label>
      <input
        type="text"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label htmlFor="descripcion">Descripcion Planeta</label>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <Button onClick={handleClick}>Registrar</Button>
    </>
  );
}
