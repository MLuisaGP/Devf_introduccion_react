import React from 'react'
import Header from "../components/Header";
import { useEnviado } from '../hook/useEnviado';
export default function Projects() {
  useEnviado();
  return (
    <div>
      <Header/>
      <h1>Mis projectos</h1>
    </div>
  );
}
