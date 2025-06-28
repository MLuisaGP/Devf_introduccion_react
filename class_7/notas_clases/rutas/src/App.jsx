import './App.css'
import { Routes,Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import Profile from './pages/Profile'
import { Login } from './pages/Login'
import ProtectRoute from './pages/ProtectRoute'
import Enviado from './pages/Enviado'
import Formulario from './pages/Formulario'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/form" element={<Formulario />} />
      <Route path="/enviado" element={<Enviado />} />

      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/profile"
        element={
          <ProtectRoute>
            <Profile />
          </ProtectRoute>
        }
      />
    </Routes>
  );
}

export default App;
