export function Login(props) {
  const { toggleLogin } = props;
  return (
    <>
      <h1>Inicia sesion</h1>
      <button onClick={toggleLogin}>Login</button>
    </>
  );
}
