import React, { useCallback, useState } from "react";
import "./App.css";
//Memoriza el componente listaNombre


function ListaNombre({ onFilter }) {
  console.log("Renderizado de lista de nombres");
  return (
    <>
      <input
        type="text"
        placeholder="Buscar nombre"
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
}
const MemoLista = React.memo(ListaNombre);

function App() {
  const [nombres] = useState(["Armando", "Juan", "Pablo", "Lucia", "Marcos"]);
  const [filtro, setFiltro] = useState("");

  const filtrar = useCallback((value) => {
    setFiltro(value.toLowerCase());
  },[]);

  const resultado = nombres.filter((n) => n.toLowerCase().includes(filtro));
  return (
    <>
      <h1>Buscar Nombre</h1>
        <MemoLista onFilter={filtrar}/>
      <ul>
          {resultado.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
      </ul>
    </>
  );
}

export default App;
