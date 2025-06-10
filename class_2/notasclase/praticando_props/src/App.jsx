import './App.css'
import Contador from './components/contador'
import Mensaje from './components/mensaje'
import PerfilUser from './components/perfilUsuario'
import Tarjetas from './components/tarjetas'

function App() {

  return (
    <>
      <div>
        <h1>Ejemplo de Props en React</h1>
        <Mensaje texto="¡Hola Mundo!"/>
        <Mensaje texto="¡Bienvenido a React!"/>
        <Tarjetas nombre="Luisa" edad={28} ocupacion="Desarrolladora de sistemas"/>
        <Tarjetas nombre="Carlos Gómez" edad={35} ocupacion="Diseñador UX" />
        <Contador/>
      </div>
      <div>
        <PerfilUser/>
      </div>

    </>
  )
}

export default App
