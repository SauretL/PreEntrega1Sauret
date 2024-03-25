import React from "react"
import CarWidget from "../CarWidget/CarWidget"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {

    return (
        <>
        <h1>GunplArg Hobby Store</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"} >Inicio</NavLink></li>
                    <li><NavLink to={"productos"} >Todos los productos</NavLink></li>
                    <li><NavLink to={"/categoria/hg"} >High Grades</NavLink></li>
                    <li><NavLink to={"/categoria/mg"} >Master Grades</NavLink></li>
                    <li><NavLink to={"/categoria/rg"} >Real Grades</NavLink></li>
                    <li><NavLink to={"about-us"} >Sobre nosotros</NavLink></li>
                    <li><NavLink to={"contacto"}>Contacto</NavLink></li>
                </ul>
            </nav>
            <CarWidget/>
        </>
    )
}

export default NavBar