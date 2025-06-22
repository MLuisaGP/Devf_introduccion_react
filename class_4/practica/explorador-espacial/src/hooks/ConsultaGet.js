import { useState } from "react";
import { useEffect } from "react";
    
export function ConsultaGet(){    
    const [planetas, setPlanetas]  = useState();
    useEffect(() => {
        fetch('http://127.0.0.1:5000/',{
            method:'GET'
        })
        .then((res)=>res.json())
        .then((body)=>setPlanetas(body.planetas()))
        .catch((err)=>console.error('Ha habido un error para obtener los planetas:',err))
    }, []);
    return planetas;
}
