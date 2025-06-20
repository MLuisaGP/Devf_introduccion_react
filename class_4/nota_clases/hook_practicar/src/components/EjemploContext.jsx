import  { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function EjemploContext() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Soy un botón {theme}</button>;
}

export default EjemploContext