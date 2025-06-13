import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import { useEffect } from 'react';

function App() {
  const [montar,setMontar]=useState(false);
  const [width,setWidth]=useState(window.innerWidth)
  useEffect(()=>{
    const reSize=()=>setWidth(window.innerWidth)
    window.addEventListener("resize",reSize)
    return ()=>{
      window.removeEventListener("resize",reSize);
    }
  })
  return (
    <>
    <h1>Hola Mundo</h1>
    <p>Tamaño pantalla: {width}px</p>
    <button onClick={()=>setMontar(!montar)}>Desmontar</button>
    {montar?(<MyComponent />):(<p>Desmontado</p>)}
    </>
  )
}

export default App
