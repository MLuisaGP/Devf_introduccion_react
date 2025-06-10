import { useState } from "react";


function ListaCompras(){
    const [productos, setProductos] = useState();
    const[nuevoProducto, setNuevoProducto]=useState();

    const agregarProducto = ()=>{
        if(nuevoProducto.trim() !== ''){
            setProductos([...productos,nuevoProducto]);
            setNuevoProducto('');
        }
    }
    const eliminarProducto = (index)=>{
        setProductos(productos.splice(index,1))
    }

    return (
        <div>
            <h2>Lista de Compras</h2>
            <input type="text" />
        </div>
    )
}

export default ListaCompras;