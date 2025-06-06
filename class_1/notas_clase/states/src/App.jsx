import { useState } from 'react'
import './App.css'
// los ciclos de vida de un componente es el 
// montaje- se crea e inserta el componente en el DOM
// Actualizacion - cambiamos los estados
// desmontaje - se elimina el montaje del DOM
function App() {
  const [name,setName] = useState('');

  const handleChange = (event)=>{
    setName(event.target.value)
  }
  return (
    <>
    <section>
      <input type="text" name="" id="" value={name} onChange={handleChange} />
      <h1>Hola Mundo yo soy {name}</h1>
    </section>
    </>
  )
}

export default App
