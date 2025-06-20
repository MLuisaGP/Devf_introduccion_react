import { useMemo } from "react";

    
export function MemoEstado(estadoNave){    
    const mensajeEstado = useMemo(() => {
        return `Estado: ${estadoNave}`;
    }, [estadoNave]);
    return mensajeEstado;
}
