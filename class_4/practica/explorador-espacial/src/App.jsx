import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Planeta from './componentes/Planeta';

function App() {
  // ... (estado)
  const[estadoNave,setEstado]=useState('en Orbita');
  const[distancia,setDistancia]=useState(1);
  const[planetasVisitados,setPlaneta]=useState(['Marte','Jupiter']);

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      // ... (simulación de vuelo)
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  return (
    <div>
      {/* ... (información del panel) */}
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}

export default App
