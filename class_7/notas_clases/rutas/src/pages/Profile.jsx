import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
      <h1>Bienvenido a tu Perfil</h1>
      <button onClick={logout}>Cerrar Sesion</button>
    </>
  );
}
