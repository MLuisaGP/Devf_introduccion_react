import React from "react";
import { Link } from "react-router-dom";

export default function Row({cita}) {
  return (
    <tr>
      {/* <td>{cita.id}</td> */}
      <td>{cita.paciente}</td>
      <td>{cita.hora}</td>
      <td>{cita.dia}</td>
      <td>{cita.doctor}</td>
      <td>
        <Link to={`/cita/${cita.id}`}>Ver</Link>
      </td>
    </tr>
  );
}
