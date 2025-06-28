import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Enviado() {
  const location = useLocation()//Nos da acceso al objeto actual en react
  const nombre = location.state?.nombre || "Personita"
    return (
    <div>

      <h1>{nombre} haz enviado el correo, pronto estaremos en contacto contigo</h1>
    </div>
  )
}
