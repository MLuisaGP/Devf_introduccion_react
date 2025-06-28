import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Formulario(){
    const navigate = useNavigate();
    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')

    const handledSubmit = (e)=>{
        e.preventDefault();
        console.log('Formulario enviado ...', nombre)
        navigate("/enviado",{state:{nombre, email}})
    }
    return (
      <section style={{ textAlign: "center", marginTop: "10px" }}>
        <h1>Habla con un asesor</h1>
        <form action="" onSubmit={handledSubmit}>
          <input
            type="text"
            value={nombre}
            placeholder="Nombre:"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Correo Electronico:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
}