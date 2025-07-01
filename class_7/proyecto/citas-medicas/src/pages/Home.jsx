import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'

export default function Home() {
  return (
    <div className='body'>
      <Header/>
      <section className='formulario'>
        <h1>Agenda nueva cita</h1>
        <Form/>

      </section>
    </div>
  )
}
