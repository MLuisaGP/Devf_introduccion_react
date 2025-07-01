import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function CitaDetalle() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1>Detalles Citas</h1>
      <p>Id de la cita: {id}</p>
    </div>
  );
}
