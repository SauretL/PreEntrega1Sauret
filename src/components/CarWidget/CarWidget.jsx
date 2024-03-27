import React, {useContext} from "react"
import { CartContext } from "../../context/CartContext"

const CarWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <div className="cartContainer">
            <img src="../../../public/assets/img/carrito.png" alt="carrito" className="cart"></img>
            <p className="cartNumber"> {cantidadCarrito() == 0 ? null : cantidadCarrito()} </p>
        </div>
    )
}

export default CarWidget