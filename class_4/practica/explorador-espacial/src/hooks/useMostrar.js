import { useState } from "react";
import { useEffect } from "react";
    
export function useMostrar(refresh = 0){    
    const [planetas, setPlanetas]  = useState([]);
    useEffect(() => {
        console.log('refrescado');
        
        fetch("http://127.0.0.1:5000/planets", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => setPlanetas(data))
            .catch((err) =>
                console.error("Ha habido un error para obtener los planetas:", err)
            );
    }, [refresh]);
    return planetas;
}
