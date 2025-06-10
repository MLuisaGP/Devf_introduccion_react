import { useState } from "react";
import './ListaCompras.css';

function ListaCompras(){
    const [productos, setProductos] = useState([]);
    const[nuevoProducto, setNuevoProducto]=useState();

     // Función para agregar un nuevo producto a la lista
    const agregarProducto = ()=>{
        if(nuevoProducto.trim() !== ''){
            setProductos([...productos,nuevoProducto]);
            setNuevoProducto('');
        }
    }
    
    const eliminarProducto = (index)=>{
        setProductos(productos.filter((valor, indice)=>indice != index));
        // productos.splice(index,1);
        // setProductos([...productos])
    }

    return (
        <div>
            <h2>Lista de Compras</h2>
            <section className="form">
                <input type="text" value = {nuevoProducto} onChange={(e)=>setNuevoProducto(e.target.value)}/>
                <button onClick={agregarProducto}>Agregar</button>
            </section>
            <section>
                <ul>
                    {productos.map((producto, index)=>(
                        <li key={index}>
                            {producto}
                            <button onClick={()=>eliminarProducto(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

    )
}

export default ListaCompras;