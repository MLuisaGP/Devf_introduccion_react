import { useEffect, useState } from "react";
import { PartePanel } from "./PartePanel";
import { Button } from "./Button";
import Planeta from "./Planeta";

function Panel() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstado] = useState("En Planeta");
  const [avanzando, setAvanzando] = useState(false);
  const [mostrarPlaneta, setMostrarPlaneta] = useState(false);
  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje
    const intervalo = setInterval(() => {
      // Montaje
      if(avanzando){
        setCombustible(prev=>{
          //Siempre usa el ultimo valor correcto
          if (prev <= 0) {
            setAvanzando(false);
            return 0;
          }
          return prev - 1;
        });
        setDistancia(prev=>prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, [avanzando]);

  useEffect(() => {
    setEstado(`En ${avanzando ? "Orbita" : "Planeta"}`);
  }, [avanzando]);

  const clickAvanzar = () => {
    if(!avanzando){
      setMostrarPlaneta(false);
    }
    setEstado(`${avanzando ? "Aterizando" : " Despegando"}...`);
    setTimeout(() => {
      setAvanzando(prev=>!prev);
    }, 500);
  };

  useEffect(()=>{
    if(distancia % 5 == 0 ){
      setMostrarPlaneta(prev=>!prev)
    }},[distancia])

  return (
    <div className="panel">
      <h2 className="panel__title">Panel de control</h2>

      <div className="panel__controles">
        <PartePanel nombre="Distancia" valor={distancia} />
        <PartePanel nombre="Combustible" valor={combustible} />
        <PartePanel nombre="Estado" valor={estadoNave} />
      </div>
      <section className="panel__btns">
        {/* No puedes aterizar si no hay planeta nuevo */}

        {(mostrarPlaneta || !avanzando) && (
          <Button
            onClick={clickAvanzar}
            disabled={combustible <= 0 && !avanzando}
          >
            {avanzando ? "Aterrizar" : "Despegar"}
          </Button>
        )}
        {!avanzando && combustible < 100 && (
          <Button
            onClick={() => {
              setCombustible(100);
            }}
          >
            {"Cargar combustible"}
          </Button>
        )}
      </section>
      {(mostrarPlaneta && avanzando) && <p>¡Planeta Nuevo!</p>}
      {mostrarPlaneta && !avanzando && <Planeta />}
    </div>
  );
}

export default Panel;
