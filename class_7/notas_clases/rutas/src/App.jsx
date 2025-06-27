import './App.css'
import { Routes,Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import Profile from './pages/Profile'
import { Login } from './pages/Login'

function App() {
  return (
    <Routes >
      <Route path="/" element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/profile' element={<Profile/>} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App;
