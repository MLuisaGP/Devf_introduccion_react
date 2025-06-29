import './App.css'
import Projects from './pages/projects';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Enviado from "./pages/Enviado";
import ProtectRoute from "./components/ProtectRoute";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="*" element={<NotFound />} />

      <Route
        path="/enviado"
        element={
          <ProtectRoute>
            <Enviado />
          </ProtectRoute>
        }
      />
    </Routes>
  );
}

export default App
