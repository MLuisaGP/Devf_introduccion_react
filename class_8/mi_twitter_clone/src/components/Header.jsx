import { Link, useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    const handledClick = ()=>{
        localStorage.removeItem('auth')
        navigate('/login')
    }
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      <button onClick={handledClick}>Logout</button>
    </nav>
  );
}
