// import React from 'react'
import Header from "../components/Header";
import Formulario from '../components/Formulario';
import { useEnviado } from "../hook/useEnviado";
export default function Home() {
  useEnviado();
  return (
    <>
    <Header/>
        <div>
        <h1>Luisa Galaz</h1>
        <h3>Desarrolladora de sistemas</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ut quis asperiores, omnis vel harum enim qui non delectus soluta aut ducimus suscipit voluptatibus voluptatem corporis? Ullam inventore nam ex.</p>
        </div>

    <Formulario/>
    </>
  )
}
