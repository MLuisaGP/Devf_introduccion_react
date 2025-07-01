import React from "react";
import { useState } from "react";

export default function Form() {
  const [paciente, setPaciente] = useState("");
  const [hora, setHora] = useState("");
  const [doctor, setDoctor] = useState("");
  const [dia, setDia] = useState("");

  const handledSubmit = (e) => {
    e.preventDefault();
    
    const validar = validarForm();
    if (!validar) return;
    const citas = localStorage.getItem("citas") ? JSON.parse(localStorage.getItem("citas")): [];
    localStorage.setItem(
      "citas",
      JSON.stringify([
        ...citas,
        {id:Math.ceil(Math.random()*8000), paciente: paciente, dia: dia, doctor: doctor, hora: hora },
      ])
    );
    setPaciente("");
    setHora("");
    setDoctor("");
    setDia("");
    alert('Se ha registrado nueva cita')
  };

  const validarForm = () => {
   
    return (paciente && doctor && hora && dia);
  };

  return (
    <>
      <form onSubmit={handledSubmit}>
        <div className="form_input">
          <label htmlFor="paciente">Nombre Paciente:</label>
          <input
            type="text"
            name="paciente"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
          />
          {!paciente && (
            <p className="alert-danger">
              El nombre del paciente es obligatorio
            </p>
          )}
        </div>
        <div className="form_input">
          <label htmlFor="dia">Dia consulta:</label>
          <input
            type="date"
            name="dia"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          />
          {!dia && (
            <p className="alert-danger">El dia de la consulta es obligatoria</p>
          )}
        </div>
        <div className="form_input">
          <label htmlFor="hora">Hora consulta:</label>
          <input
            type="time"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          {!hora && (
            <p className="alert-danger">
              La hora de la consulta es obligatoria
            </p>
          )}
        </div>
        <div className="form_input">
          <label htmlFor="doctor">Nombre Doctor:</label>
          <input
            type="text"
            name="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          {!doctor && (
            <p className="alert-danger">El nombre del doctor es obligatorio</p>
          )}
        </div>
        <div>
          <button type="submit" disabled={!(paciente && doctor && hora && dia)}>
            Agendar
          </button>
        </div>
      </form>
    </>
  );
}
