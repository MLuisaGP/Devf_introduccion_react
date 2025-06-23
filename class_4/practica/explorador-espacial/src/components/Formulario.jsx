import { useState } from "react";
import { Button } from "./Button";
import { useContext } from "react";
import { RefreshContext } from "../context/RefreshContext";

export function Formulario({ onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState([]);
  const refrescar = useContext(RefreshContext);
  const handleClick = () => {
    fetch("http://127.0.0.1:5000/planets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nombre, description: descripcion }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorMg = await res.text();
          setError(JSON.parse(errorMg)["error"]);
          console.log(JSON.parse(errorMg)["error"]);
          throw new Error(errorMg || "Error al registrar el planeta");
        }
        res.json();
      })
      .then(() => {
        refrescar((prev) => prev + 1);
        onSubmit?.(nombre);
      })
      .catch((err) => console.error("Hubo un error:", err));
  };

  return (
    <section className="formulario">
      <div className="formulario__input">
        <label htmlFor="nombre">Nombre Planeta</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="formulario__input">
        <label htmlFor="descripcion">Descripcion Planeta</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      {error && error.map((e) => <p className="alerta">{e}</p>)}
      <Button onClick={handleClick}>Registrar</Button>
    </section>
  );
}
