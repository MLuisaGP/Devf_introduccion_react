import React, { useEffect, useState } from "react";
import Product from "./Product";
import useTotal from "../../hook/useTotal";
// import useTotal form './use'

const productosIniciales = [
    {id: 1, nombre: 'Tableta Grafica', precio:3000.00, stock: 1},
    {id: 2, nombre: 'Monitor LG', precio:4000.00, stock: 3}
];

function CarritoCompras(){
    const [carrito, setCarrito] = useState(productosIniciales)
    const total = useTotal(carrito)

    // EFECTO SECUNDARIO
    /* Reaccionamos cuando cambia el total.
    /* Esta escuchando si hay cambio en total
    */
    useEffect(()=>{
        console.log('Total actualizado: ', total);
    },[total])

    const cambiarStock = (id, cantidad)=>{
        setCarrito(
            prev=>//Mapeamos cada uno de los objetos
                prev.map(item=>
                    item.id === id ?{...item, stock: Math.max(0,item.stock + cantidad)}:item ))
    }

    return(
        <>
            <section>
                <h2>Lista de productos</h2>
                <ul>
                    {carrito.map(producto=>(
                        <Product
                        key = {producto.id}
                        producto = {producto}
                        onCambiarStock = {cambiarStock}
                        />
                    ))}
                </ul>
            </section>
            <p>Total del carrito: {total}</p>
        </>
    )


}

export default CarritoCompras;