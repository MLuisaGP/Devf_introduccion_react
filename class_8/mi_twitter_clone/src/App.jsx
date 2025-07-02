import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Auth from './pages/Auth';
import ProtectRoute from './components/ProtectRoute';
import NoProtectRoute from "./components/NoProtectRoute";
import Profile from './pages/Profile';

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
      />
      <Route
        path="/login"
        element={
          <NoProtectRoute>
            <Auth />
          </NoProtectRoute>
        }
      />
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

export default App
