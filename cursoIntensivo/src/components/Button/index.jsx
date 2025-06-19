// import { useMemo, useState } from "react";
// import styles from './Button.module.css'

export function Button(props) {
    const { children, onClick, loading, color,disabled } = props

    // const className = [`my-4 ms-3 btn btn-${loading?'secondary':'primary'}`, styles.button].join(" ");

    //Propiedades en linea

    let classStatus = loading?'soft':color
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            isLoading={loading}
            className={`btn btn-soft btn-${classStatus}`}>

            {loading ? 'Cargando...' : children}

        </button>

    )
}