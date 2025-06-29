import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const enviado = localStorage.getItem("enviado") === "true";
  return enviado ? children : <Navigate to="/" />;
}
