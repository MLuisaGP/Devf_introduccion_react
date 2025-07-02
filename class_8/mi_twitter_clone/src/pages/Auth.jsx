import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handledSubmit = (e) => {
    e.preventDefault();
    if (email == "user@example.com" && pwd == "Abc1234") {
      localStorage.setItem('auth','true')
      navigate("/profile");
    } else {
      alert("Licencias no validas");
    }
  };

  return (
    <section>
      <h1>Inicio de Sesion</h1>
      <form onSubmit={(e)=>handledSubmit(e)}>
          <section>
            <input
              type="email"
              placeholder="Correo Electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contraseña"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <button
              type="submit"
              style={{ background: "blue" }}
            >
              Inicio de Sesion
            </button>
          </section>
        </form>
    </section>
  );
}
