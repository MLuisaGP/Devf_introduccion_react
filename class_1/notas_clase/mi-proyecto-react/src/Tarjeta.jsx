function Tarjeta(props) {
    return (
        /**
         *  Una llave significa que escribiras js dentro de html
         *      <div style={  aquí va JavaScript  }></div>
         * 
         *  La segunda llave es porque se esta esperando un objeto
         *      El atributo style en React espera un objeto JavaScript.
         *      Y en JavaScript, los objetos van entre llaves:
         *      { border: '1px solid #ccc', padding: '10px' }
         * 
         *  La primera llave: JSX interpreta que estás metiendo JavaScript.
         *  La segunda llave: estás pasando un objeto JavaScript con estilos.
         */
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>

        </div>
    )
}
export default Tarjeta;