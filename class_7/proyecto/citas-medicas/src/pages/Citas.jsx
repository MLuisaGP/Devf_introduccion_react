import React, {  useEffect, useState } from 'react'
import Header from '../components/Header'
import Row from './Row';

export default function Citas() {
  const [citas,setCitas]=useState([]);
  useEffect(()=>{
    let datos = localStorage.getItem("citas");
    datos = JSON.parse(datos);
    setCitas(datos);
    
  },[])
  return (
    <div className="body">
      <Header />
      <section className='tabla'>
      <h1>Citas</h1>
        <table>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Paciente</th>
              <th>Hora</th>
              <th>Dia</th>
              <th>Doctor</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {citas.map(cita => {
              return <Row cita={cita}/>
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
