import { Navigate } from "react-router-dom";

export default function NoProtectRoute({ children }) {
  const isAuth = localStorage.getItem("auth") === "true";
  return isAuth ? <Navigate to="/" /> : children;
}
