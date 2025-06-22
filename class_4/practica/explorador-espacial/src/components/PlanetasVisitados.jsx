import { useEffect } from "react";
import { useState } from "react";

export function PlanetasVisitados(){
    const [planetas, setPlanetas]=useState([])
    useEffect(() => {
      fetch("http://127.0.0.1:5000/planets", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setPlanetas(data))
        .catch((err) =>
          console.error("Ha habido un error para obtener los planetas:", err)
        );
    }, []);
    return (
      <div>
        <h3>Planetas visitados</h3>
        <ul>
          {planetas.map((planeta) => (
            <li key={planeta.id}>{planeta.name}</li>
          ))}
        </ul>
      </div>
    );
}