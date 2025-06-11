import { useMemo, useState } from "react";

function ExpensiveCalculationComponent(){
    const [input,setInput]=useState(0);

    //funcion costosa
    const expensiveCalculation = (num)=>{
        console.log('Calculando...');

        let result = 0;
        for (let i = 0 ; i<100000; i++){
            result += num * i;

        }
        return result;
        
    }
    // Usamos useMemo para Memorizar el resultado de la funcion costosa
    const memorizedResult = useMemo(()=>expensiveCalculation(input),[input]);
    return (
        <div>
            <input type="numbre" 
            value={input}
            onChange={(e)=>setInput(parseInt(e.target.value||0))}
            />
            <p>Resultado memorizado: {memorizedResult}</p>
        </div>
    )
}
export default ExpensiveCalculationComponent;