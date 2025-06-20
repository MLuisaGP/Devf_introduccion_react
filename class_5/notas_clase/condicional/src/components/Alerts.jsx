import { useState } from "react";
function Alerts() {
  const [showAlert, setShowAlert] = useState(false);

  const clickHandled = ()=>setShowAlert(!showAlert)

  return (
    <>
      <section>
        <button onClick={clickHandled}>
          {showAlert?"Ocultar Alerta":"Mostrar Alerta"}
        </button>

        {showAlert && (
          <section>
            <section style={{marginTop:"10px",color:"red"}}>
              ⚠️ Este es un mensaje de advertencia
            </section>
          </section>
        )}

      </section>
    </>
  );
}

export default Alerts;
