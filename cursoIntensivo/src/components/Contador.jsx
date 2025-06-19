import { useState } from "react";
import { Button } from "./Button";

export function Contador(){
    const [valor, setValor]=useState(0);
    const incrementar=()=>setValor(valor+1);
    const decrementar=()=>setValor(valor-1);
    return (
        <>
            <p>El contador esta en {valor}</p>
            <Button onClick={incrementar} color='accent'> Incrementar </Button>
            <Button onClick={decrementar} color='secondary' disabled={valor<=0}> Decrementar </Button>
        </>
    )
}