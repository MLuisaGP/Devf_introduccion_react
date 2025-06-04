function Tarjeta(){
    const nombre = "Ana Pérez";
    const profesional = "Desarrollo Web";
    const mensaje = "¡Bienvendio a mi tarjeta de presentación!";
    return(
        <div style={{ border:'1px solid #ccc', padding:'20px',width:'300px',textAlign:'center' }}>
            <h2>{nombre}</h2>
            <h4>{profesional}</h4>
            <p>{mensaje}</p>
        </div>
    )
}
export default Tarjeta;