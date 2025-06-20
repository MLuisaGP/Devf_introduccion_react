import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Navbar } from "./components/Navbar";
import { Links } from "./components/Links";

function App() {
  return (
    <>
      <Navbar>
        <Links url="/" >Home</Links>
        <Links url="/about" >About</Links>
        <Links url="/contact" >Contact</Links>
      </Navbar>
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;