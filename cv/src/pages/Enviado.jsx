import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function Enviado() {
  const location = useLocation(); //Nos da acceso al objeto actual en react
  const email = location.state?.email || "";
  if(email==""){
    return(<>
    <Header/>
    <p>Hubo un problema con tu solicitud</p>
    </>)
  }
  return (
    <div>
        <Header/>
      <h1>
        Gracias por tu interes! Estare en contacto contigo desde este correo
        {email}
      </h1>
    </div>
  );
}
