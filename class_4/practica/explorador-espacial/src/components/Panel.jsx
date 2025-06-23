import { useEffect, useMemo, useState } from "react";
import { PartePanel } from "./PartePanel";
import { Button } from "./Button";
import Planeta from "./Planeta";

function Panel() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [avanzando, setAvanzando] = useState(false);
  const [mostrarPlaneta, setMostrarPlaneta] = useState(false);



  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje
    const intervalo = setInterval(() => {
      // Montaje
      if (avanzando) {
        setCombustible((prev) => {
          //Siempre usa el ultimo valor correcto
          if (prev <= 0) {
            setAvanzando(false);
            return 0;
          }
          return prev - 1;
        });
        setDistancia((prev) => prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, [avanzando]);

  const clickAvanzar = () => {
    setAvanzando((prev) => !prev);
  };

  const estadoNave = useMemo(() => {
  return `En ${avanzando ? "Orbita" : "Planeta"}`;
}, [avanzando]);

  useEffect(() => {
    if (distancia % 5 == 0) {
      setMostrarPlaneta((prev) => !prev);
    }
  }, [distancia]);

  return (
    <div className="panel">
      <section className="panel__controles">
        <PartePanel nombre="Distancia" valor={distancia} />
        <PartePanel nombre="Combustible" valor={combustible} />
        <PartePanel nombre="Estado" valor={estadoNave} />
      </section>
      <section className="panel__new-planets">
        {!mostrarPlaneta && <h3>¡Comencemos a explorar!</h3>}
        {mostrarPlaneta && avanzando && <h3>¡Planeta Nuevo!</h3>}
        {mostrarPlaneta && !avanzando && <Planeta />}
      </section>
      <section className="panel__btns">
        {/* No puedes aterizar si no hay planeta nuevo */}
        <div>
          {(mostrarPlaneta || !avanzando) && (
            <Button
              onClick={clickAvanzar}
              disabled={combustible <= 0 && !avanzando}
            >
              {avanzando ? "Aterrizar" : "Despegar"}
            </Button>
          )}
        </div>
        <div>
          {!avanzando && combustible < 100 && (
            <Button
              onClick={() => {
                setCombustible(100);
              }}
            >
              {"Cargar combustible"}
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Panel;
