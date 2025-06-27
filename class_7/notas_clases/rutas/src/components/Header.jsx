import { Link } from "react-router-dom"

export function Header(){
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contacto</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    )
}