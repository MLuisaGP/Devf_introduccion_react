import { useState } from "react";
import { useDarkMode } from "../hook/useDarkMode";

function Theme(){
    const [isDark, setIsDark] = useState(false);

    //Indicamos que utilizaremos el hook de dark mode
    useDarkMode(isDark);
    
    return(
        <button onClick={()=>setIsDark(prev=>!prev)}>
            Cambiar a {isDark ? '☀️':'🌙'}
        </button>
    )
}
export default Theme;