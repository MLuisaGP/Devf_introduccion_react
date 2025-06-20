export function Home(props){
    const {toggleLogin} =props
    return (
      <>
        <h1>Bienvenido usuario</h1>
        <button onClick={toggleLogin}>Cerrar sesion</button>
      </>
    );
}