import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";
import { PlanetasVisitados } from "./components/PlanetasVisitados";
import { RefreshContext } from "./context/RefreshContext";
import { useMostrar } from "./hooks/useMostrar";

function App() {
  const [refresh, setRefresh] = useState(0);
  const planetas = useMostrar(refresh);

  const refrescar = (valor) => {
    setRefresh(valor);
  };
  return (
    <>
      <RefreshContext.Provider value={refrescar}>
        <section className="centro_control">
          <Panel />
          <PlanetasVisitados planetas={planetas} />
        </section>
      </RefreshContext.Provider>
    </>
  );
}

export default App;
