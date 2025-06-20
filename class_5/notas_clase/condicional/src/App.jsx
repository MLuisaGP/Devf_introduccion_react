import { useState } from "react";
import "./App.css";
function App() {
  const [role, setRole] = useState("viewer");

  const onSelectHandled = (e) => {
    setRole(e.target.value);
  };
  const renderByRole = () => {
    switch (role) {
      case "admin":
        return <h1>Vista de Administrador</h1>;
      case "editor":
        return <h1>Vista de Editor</h1>;
      case "viewer":
        return <h1>Vista de Lectura</h1>;
      default:
        return <h1>Vista desconocida</h1>;
    }
  };

  return (
    <>
      <section>
        <h1>Seleciona tu rol:</h1>
        <select onChange={onSelectHandled}>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
          <option value="otro">Otro</option>
        </select>
        <section>{renderByRole()}</section>
      </section>
    </>
  );
}

export default App;
