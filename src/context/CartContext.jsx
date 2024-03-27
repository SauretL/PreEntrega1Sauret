import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {



    const [cart, setCart] = useState([])

    const agregarCarrito = (producto, cantidad) => {

        const productoSeleccionado = cart.find(prod => prod.producto.id == producto.id)

        if (!productoSeleccionado) {

            setCart([...cart, { producto, cantidad }])

        } else {
            const nuevoCart = cart.map(item => {
                if (item.producto.id === producto.id) {
                    return { ...item, cantidad: item.cantidad + cantidad }
                }
                return item
            });
            setCart(nuevoCart)
        }
    }

    const eliminarProducto = (productoId) => {
        const nuevoCart = cart.filter(item => item.producto.id !== productoId)
        setCart(nuevoCart)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const cantidadCarrito = () => {
        const totalCart = cart.reduce((total, item) => total + item.cantidad, 0)
        return totalCart
    }

    const totalCarrito = () => {
        const precioFinal = cart.reduce((total, item) => total + (item.cantidad * item.producto.precio), 0)
        return precioFinal
    }


    return (
        <CartContext.Provider value={{ cart, agregarCarrito, eliminarProducto, vaciarCarrito, cantidadCarrito, totalCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider