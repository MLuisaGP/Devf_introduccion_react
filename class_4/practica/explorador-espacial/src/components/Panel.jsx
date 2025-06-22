import { useEffect, useState } from "react";

function Panel() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstado] = useState("En Planeta");
  const [avanzando, setAvanzando] = useState(false);

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje
    const intervalo = setInterval(() => {
      // Montaje
      if (combustible <= 0) {
        setAvanzando(false);
      } else {
        explorando();
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
  };

  useEffect(() => {
    setEstado(`En ${avanzando ? "Orbita" : "Planeta"}`);
  }, [avanzando]);

  const clickHandled = ()=>{
    setEstado(`${avanzando ? "Aterizando" : " Despegando"}...`);
    setTimeout(()=>{
      setAvanzando(!avanzando)
    },1000)
  }
  return (
    <div>
      <h2>Panel de control</h2>
      <p>Distancia: {distancia}</p>
      <p>Combustible: {combustible}</p>
      <p>Estado: {estadoNave}</p>
      <button
        onClick={clickHandled}
        disabled={combustible <= 0 && !avanzando}
      >
        {avanzando ? "Aterrizar" : "Despegar"}
      </button>
     
    </div>
  );
}

export default Panel;
