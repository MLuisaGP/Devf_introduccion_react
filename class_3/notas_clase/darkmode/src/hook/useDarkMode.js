import { useEffect } from "react";


export function useDarkMode(enabled){
    useEffect(() => {
        if(enabled){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
        //Esto se ejecuta antes de los if else/ evitando efectos no deseados
        return()=>{
            document.body.classList.remove('dark-mode')
        };
    }, [enabled]);
}