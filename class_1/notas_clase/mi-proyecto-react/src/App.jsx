
import './App.css'
import Boton from './Boton.jsx'
import Saludo from './Saludo.jsx'
import Tarjeta from './Tarjeta.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Boton nombre='luisa'/>
      <Boton nombre='Martin'/>
      <Saludo />
      <div>
        <Tarjeta  descripcion = "Una biblioteca para construir interfaces de usuario."/>
        <Tarjeta titulo = "JavaScript" descripcion = "El lenguaje de la web."/>
      </div>
    </>
  )
}

export default App
