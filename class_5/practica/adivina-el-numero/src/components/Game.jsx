import { useState } from "react";
import { useNumeroRand } from "../hook/useNumeroRand"
import { InputNumber } from "./InputNumber";
import { Message } from "./Message";

export function Game() {
    const [reset, setReset] = useState(false);
    const [valor,setValor] = useState(0);
    const numeroAleatorio = useNumeroRand(reset);
    const [msn,setMsn]=useState('¡Comencemos!');
    const [ganado,setGanado]=useState(false);

    const submithandled=(valor)=>{
        setValor(valor)
        if(numeroAleatorio>valor){
            setMsn('El numero es mayor ')
        }else if(numeroAleatorio<valor){
            setMsn('El numero es menor ')
        }else{
            setMsn('Hay ganado!! ¿De nuevo?')
            setGanado(true)
        }
    }
    const resetHandled =()=>{
        setReset(!reset);
        setGanado(false)
    }
    return (

        <>
            <Message msn={msn}/>
            <p>{numeroAleatorio}</p>
            <p>Valor:{valor}</p>
            <InputNumber submit={submithandled} valor={valor}/>
            {ganado && <button onClick={resetHandled}>Reset</button>}
        </>
    )
}