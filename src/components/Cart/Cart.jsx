import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {
    const { cart, vaciarCarrito, eliminarProducto, totalCarrito } = useContext(CartContext)

    return (
        <>
            <h2 className="cart-title">ESTE ES EL CARRITO</h2>
            {cart.length === 0 ? (
                <h2 className="cart-message">NO HAY PRODUCTOS EN EL CARRITO</h2>
            ) : (
                <>
                    <h2 className="cart-title">Lista de carrito</h2>
                    {cart.map((p) => (
                        <CartItem key={p.id} producto={p} eliminarProducto={eliminarProducto} />
                    ))}
                    <p className="cart-total">Precio total: ${totalCarrito()}</p>
                    <div className="cart-buttons">
                        <button onClick={vaciarCarrito}>Vaciar carrito</button>
                        <button><Link to="/checkout">Comprar productos</Link></button>
                    </div>
                </>
            )}
        </>
    )
}

export default Cart