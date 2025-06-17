import { useEffect, useState } from 'react'
import './App.css'
import { MemoEstado } from './hooks/MemoEstado';

function App() {

  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstado] = useState('En Planeta');
  const [avanzando, setAvanzando] = useState(false);


  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje
    const intervalo = setInterval(() => { // Montaje
      if (combustible <= 0) {
        setAvanzando(false)
      } else {
        explorando()
      }

    }, 1000);
    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, [combustible, distancia, avanzando]);

  const explorando = () => {
    if (avanzando && combustible > 0) {
      setCombustible(combustible - 1);
      setDistancia(distancia + 1);
    }
  }

  useEffect(
    () => {
      setEstado(`${avanzando ? 'Despegando' : 'Aterizando'}...`);
      const interval = setTimeout(() => {
        setEstado(`En ${avanzando ? 'Orbita' : 'Planeta'}`);
      }, 2000)
      return () => {
        clearInterval(interval); // Desmontaje
      };
    }, [avanzando])



  return (
    <div>
      <p>Distancia: {distancia}</p>
      <p>Combustible: {combustible}</p>
      <p>{MemoEstado(estadoNave)}</p>
      <button onClick={() => {
        setAvanzando(!avanzando)
      }} disabled={combustible <= 0 && !avanzando}>{avanzando ? 'Aterrizar' : 'Despegar'}
      </button>

      {!avanzando && (<button>Registrar Planeta Nuevo</button>)}
    </div>
  );
}


export default App
