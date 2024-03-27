import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart,vaciarCarrito,eliminarProducto,totalCarrito } = useContext(CartContext)

    return (
        <div>
            <h2>ESTE ES EL CARRITO</h2>
            {cart.length == 0 ? (
                
                    <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
                  
                
            ) : (
                <>
                    <h2>Lista de carrito</h2>
                    {cart.map((p) => (
                        <CartItem key={p.id} producto = {p} eliminarProducto={eliminarProducto}/>
                    ))}
                    <p>Precio total: ${totalCarrito()}</p>
                    <button onClick={vaciarCarrito} >Vaciar carrito</button>
                    <button onClick={vaciarCarrito} >Comprar todo</button>
                </>
            )}
        </div>
    )
}

export default Cart