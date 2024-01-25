import React from "react"
import CarWidget from "../CarWidget/CarWidget"

const NavBar = () => {

    return (
        <>
        <h1>GunplArg Hobby Store</h1>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <CarWidget/>
        </>
    )
}

export default NavBar