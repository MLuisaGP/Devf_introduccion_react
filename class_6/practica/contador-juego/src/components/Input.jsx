import React, { useCallback, useState } from 'react'

export default function Input({onSubmit}) {
    const [acumulador,setAcumulador]=useState(0);
    const changedHandled = useCallback((e)=>{
        setAcumulador(e.target.value)
    },[])
    const submitHandled = useCallback(
      (e) => {
        e.preventDefault();
        if(!acumulador)return;
        onSubmit?.(acumulador);
        setAcumulador(0);
        
      },
      [onSubmit, acumulador]
    );
  return (
    <form onSubmit={submitHandled}>
      <input type="number" onChange={changedHandled} value={acumulador} />
      <button type='submit'>Cambiar valor acumulador</button>
    </form>
  );
}
