import { useEffect } from 'react';
export function useEnviado(){
    useEffect(()=>{
        localStorage.removeItem('enviado')
    },[])
}