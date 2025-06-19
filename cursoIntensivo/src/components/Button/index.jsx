// import { useMemo, useState } from "react";
// import styles from './Button.module.css'
import { styled } from 'styled-components';

export function Button(props) {
    const { children, onClick, loading } = props

    // const className = [`my-4 ms-3 btn btn-${loading?'secondary':'primary'}`, styles.button].join(" ");

    const Btn  = styled.button`
    background-color:${loading ? 'gray':'red'};
    padding:0.5rem;
    `
    //Propiedades en linea
    return (
        <Btn
            //Esto evita que los css choquen entre si 
            // className={[styles.button, styles.padded].join(" ")}
            onClick={onClick} 
            disabled={loading} isLoading={loading}>
            {loading?'Cargando...':children}
        </Btn>
    )
}