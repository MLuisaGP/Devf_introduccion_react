import { useMemo } from "react";

export function useNumeroRand(reset){
    return useMemo(()=>{
        return Math.ceil(Math.random()*100);
    },[reset]);

}