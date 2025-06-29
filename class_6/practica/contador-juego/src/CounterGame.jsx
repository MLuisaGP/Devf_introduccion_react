import { useReducer, useRef, useEffect, useCallback } from "react";
import Input from "./components/Input";

const initialState = {
      count: 0,
      history: [],
      acumulador: 1,
    };

function reducer(state,action){
    switch (action.type) {
        case 'increment':
            return {
              count: state.count +  state.acumulador,
              history: [...state.history, state.count + state.acumulador],
              acumulador: state.acumulador,
            };
        case 'decrement':
            return {
              count: state.count -  state.acumulador,
              history: [...state.history, state.count - state.acumulador],
              acumulador: state.acumulador,
            };
        case 'undu':
          if (state.history.length<=0)return state;
          
            return {
              history: state.history.slice(0, -1),
              count: state.history[state.history.length - 2] ?? 0,
              acumulador: state.acumulador,
            };
        case 'setAcumulador':          
            return {
              history: state.history,
              count: state.count,
              acumulador: parseInt(action.value),
            };
        case "reset":
            return initialState;
    
        default:
            return state;
    }
}

export function CounterGame() {
  const [state, dispatch] = useReducer(reducer, 
     localStorage.getItem("status")
      ? JSON.parse(localStorage.getItem("status"))
      : {
          count: 0,
          history: [],
          acumulador: 1,
        });
  const incrementBtnRef = useRef(null);

  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);
  useEffect(()=>{
    localStorage.setItem('status', JSON.stringify(state))
    
  },[state])

  //Para evitar que las funciones de los botones se re-rendericen innecesariamente, usamos useCallback:
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);
  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);
  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);
  const handleUndu = useCallback(() => {
    dispatch({ type: "undu" });
  }, []);
  const handledSubmit=(acumulador)=>{
    dispatch({ type: "setAcumulador", value:acumulador });
  }

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <Input onSubmit={handledSubmit} />
      <button ref={incrementBtnRef} onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleUndu}>Undu</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>Nuevo Valor {entry}</li>
        ))}
      </ul>
    </div>
  );
}