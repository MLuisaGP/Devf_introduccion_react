import { useState } from "react";

function Idioma() {
  const [isEnglish, setIsEnglish] = useState(false)
  const clickHandled = () => setIsEnglish(!isEnglish);
  return(
    <>
      <h1>{isEnglish ? "Hello Word!!":"Que onda mundo!!"}</h1>
      <button onClick={clickHandled}>
        {isEnglish?'ES':'EN'}
      </button>
    </>
  )

}

export default Idioma