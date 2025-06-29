import React from 'react'
import Header from '../components/Header'
import { useEnviado } from '../hook/useEnviado';

export default function NotFound() {
  useEnviado();
  return (
    <>
    <Header/>
    <div>
      <h1>Pagina no encontrada</h1>
    </div>
    </>
  )
}
