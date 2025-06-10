// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Authentication from './components/Authentication';
import Welcome from './components/Welcome';
import Login from './components/Login';

function App() {
  // const [count, setCount] = useState(0)
  //Estado global del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  //Manejar el login, inicia sesion
  const handleLogin =  ( username)=>{
    setIsAuthenticated(true)
    setUser(username)
  }

  const handleLogout = ()=>{
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <>
     <section style={{padding:'2rem'}}>
        <h2>Clown App</h2>
        <Authentication isAuthenticated = {isAuthenticated}>
          <Welcome onLogout = {handleLogout} username={user}></Welcome>
          <Login onLogin = {handleLogin}/>
        </Authentication>
     </section>
    </>
  )
}

export default App
