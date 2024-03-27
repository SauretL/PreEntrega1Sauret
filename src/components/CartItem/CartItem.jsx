import React from "react"
import "./CartItem.css" 

const CartItem = ({ producto, eliminarProducto }) => {
    return (
        <div className="cart-item-container">
            <h2> {producto.producto.nombre} </h2>
            <p>Cantidad:{producto.cantidad}</p>
            <p>Precio:${producto.producto.precio * producto.cantidad}</p>
            <img src={producto.producto.img} alt={producto.producto.nombre} className="producto-img"></img>
            <button onClick={() => eliminarProducto(producto.producto.id)} >Eliminar producto</button>
        </div>
    )
}

export default CartItem