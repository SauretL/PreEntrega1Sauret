import React, {useContext} from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CarWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <div className="cartContainer">
            <Link to={"/carrito"}><img src="../../../public/assets/img/carrito.png" alt="carrito" className="cart"></img></Link>
            <p className="cartNumber"> {cantidadCarrito() == 0 ? null : cantidadCarrito()} </p>
        </div>
    )
}

export default CarWidget