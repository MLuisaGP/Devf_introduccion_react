import { useState } from "react"

export function InputNumber({valor=0, submit }) {
    const [newValor, setNewValor]=useState(valor)

    const submitHandled = () => {
        submit?.(newValor)
    }

    return (
        <div>
            <label htmlFor="numero">Ingresa un numero entre el 1 y el 100 </label>
            <input type="number" name="numero" onChange={(e) => setNewValor(e.target.value)} />
            <button onClick={submitHandled}>Adivinar!</button>
        </div>
    )
}