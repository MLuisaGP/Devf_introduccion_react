import { useState } from 'react';


function Boton(pops){
    const [count, setCount] = useState(0)
    return (
    <>
    <p>Hola, {pops.nombre}! <br/> Haz dado {count} click{count==1?'':'s'} en el siguiente boton</p>
    <button onClick={()=>setCount((count)=>count+1)}>Haz click aquí</button>
    <br />
    <button onClick={()=>setCount((count)=>count=0)}>Reset</button>
    </>
    )
}
export default Boton;