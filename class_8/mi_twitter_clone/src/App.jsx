import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ProtectRoute from './components/ProtectRoute';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
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
