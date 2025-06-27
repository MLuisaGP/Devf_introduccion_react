import { useRef, useState } from 'react'
import './App.css'

function App() {
  const nombreRef = useRef(null);
  const correoRef = useRef(null);
  const[error,setError]=useState("")
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!nombreRef.current.value){
      setError("El nombre esta vacio favor de completarlo")
      nombreRef.current.focus()
      return;
    }
    if(!correoRef.current.value){
      setError("El correo esta vacio favor de completarlo")
      correoRef.current.focus()
      return;
    }
    setError("")
    alert("Formulario enviado correctamente")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Acercate con un asesor</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          placeholder="Nombre Completo"
          ref={nombreRef}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <input
          type="email"
          placeholder="Correo Electronico"
          ref={correoRef}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App
