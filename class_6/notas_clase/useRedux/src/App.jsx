import { useReducer } from 'react'
import './App.css'

// Hacer 3 botones para incrementar, decrementar y otro de reiniciar.

const initialState = {count:0,activo:true}

function reduce(state,action){
  switch (action.type) {
    case "incrementar":
      return { count: state.count + 1, activo: state.activo };
    case "decrementar":
      return { count: state.count - 1, activo: state.activo };
    case "reiniciar":
      return { count: 0, activo: state.activo };
    case "desactivar":
      return { count: state.count, activo: !state.activo };
    default:
      throw new Error("Accion no reconocida");
  }
}

function App() {
  //Desestructuracion de reduce
  const [state,dispatch] = useReducer(reduce,initialState);//dispatch es para enviar el estado pero hay que convertirlo en reduce ya que revisa que accion estamos haciendo

  return (
    <>
      <h2>Contador: {state.count}</h2>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "reiniciar" })}>Reiniciar</button>
      <button onClick={() => dispatch({ type: "desactivar" })}>
        {state.activo?'activo':'desactivo'}
      </button>
    </>
  );
}

export default App
