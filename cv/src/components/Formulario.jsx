import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Formulario() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handledSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado ...", nombre);
    localStorage.setItem("enviado","true");
    navigate("/enviado", { state: { nombre, email } });
  };

  return (
    <div>
      <h3>Contacto</h3>
      <form action="" onSubmit={handledSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
