import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function CitaDetalle() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("citas"));
  const cita = data.find((elemento) => elemento.id == id);
  console.log(cita);

  return (
    <div className="body">
      <Header />
      <section>
        <h1>Detalles Citas</h1>
        <p>Id de la cita: {cita.id}</p>
        <p>Nombre paciente: {cita.paciente}</p>
        <p>Doctor: {cita.doctor}</p>
        <p>Dia: {cita.dia}</p>
        <p>Hora: {cita.hora}</p>
      </section>
    </div>
  );
}
