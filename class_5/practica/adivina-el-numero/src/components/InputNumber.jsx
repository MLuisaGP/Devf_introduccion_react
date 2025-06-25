import { useState } from "react"
import { Button } from "./Button";

export function InputNumber({valor='', submit }) {
    const [newValor, setNewValor]=useState(valor)

    const submitHandled = () => {
        submit?.(newValor)
        setNewValor('0');
    }

    return (
        <div className="input">
            <label htmlFor="numero">Ingresa un numero entre el 1 y el 100 </label>
            <div>
                <input type="number" name="numero" onChange={(e) => setNewValor(e.target.value)} value={newValor} />
                <Button onClick={submitHandled}>Adivinar!</Button>
            </div>
        </div>
    )
}