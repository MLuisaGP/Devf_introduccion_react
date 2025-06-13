import { useEffect } from "react";
import { useState } from "react"

export default function MyComponent(){
    const [count, setCounter] = useState(0);
    useEffect(()=>{
        console.log("Componente montado");
        return ()=>{
            console.log('Componente desmontado');
            
        }
    },[])
    useEffect(()=>{
        console.log("Componente actualizado");
    },[count])
    return(
        <>
            <h1>My Component</h1>
            <button onClick={()=>setCounter(count+1)}>Incrementar</button>
        </>
    )
}