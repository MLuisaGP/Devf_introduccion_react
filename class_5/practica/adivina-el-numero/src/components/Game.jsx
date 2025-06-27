import { useEffect, useState } from "react";
import { useNumeroRand } from "../hook/useNumeroRand"
import { InputNumber } from "./InputNumber";
import { Message } from "./Message";
import { Button } from "./Button";

export function Game() {
    const [reset, setReset] = useState(false);
    const [valor, setValor] = useState(0);
    const numeroAleatorio = useNumeroRand(reset);
    const [msn, setMsn] = useState('¡Comencemos!');
    const [ganado, setGanado] = useState(false);

    const submithandled = (valor) => {
        if (!valor || valor <= 0 || valor > 100) {
            setMsn('Ingresa un valor válido ')
            return
        }
        setValor(valor)
        if (numeroAleatorio > valor) {
            setMsn('El numero es mayor ')
        } else if (numeroAleatorio < valor) {
            setMsn('El numero es menor ')
        } else {
            setMsn('Haz ganado!! ¿De nuevo?')
            setGanado(true)
        }
    }
    const resetHandled = () => {
        setReset(!reset);
        setGanado(false)
        setValor('')
        setMsn('Volvamos a jugar!')
    }

    useEffect(()=>{
        const gradiente = document.getElementById('gradiente');
        if(ganado){
            gradiente.classList.add('gradiente-border--animado')
        }else{
            gradiente.classList.remove('gradiente-border--animado')
        }
        return ()=>{
            gradiente.classList.remove('gradiente-border--animado')
        }
    },[ganado])

    return (
        <section className="gradiente-border" id="gradiente">
            <section className="game">
                <Message msn={msn} />
                {!ganado ?
                    <InputNumber submit={submithandled} valor={valor} />
                    : <Button onClick={resetHandled}>Reset</Button>}
                {valor ? <p>Ingresaste el: {parseInt(valor)}</p>:''}
            </section>

        </section>
    )
}