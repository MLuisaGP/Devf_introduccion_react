import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Planeta from './componentes/Planeta';

function App() {
  
  const [distancia,setDistancia]=useState(0);
  const [combustible, setCombustible]= useState(100);
  const [estadoNave,setEstado]=useState('En Orbita');
  const [planetasVisitados,setPlanetaVisitado]=useState([]);
  const [newPlaneta,setNewPlaneta]=useState('Mercurio');

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    
    const  intervalo= setInterval(() => { // Montaje
      explorando()
    }, 1000);
    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, [combustible,distancia]);

  const explorando = ()=>{
    if(estadoNave == 'En Orbita'){
      setCombustible(combustible-1);
      setDistancia(distancia+1);
    }
  }

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterizaje = ()=>{
    setEstado('Aterrizando');
    setPlanetaVisitado([...planetasVisitados,newPlaneta])
  }
  return (
    <div>
        <p>Distancia: {distancia}</p>
        <p>Combustible: {combustible}</p>
        <p>{mensajeEstado}</p>
        <button onClick={aterizaje}>Aterrizar</button>
      {/* ... (información del panel) */}
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}

export default App
