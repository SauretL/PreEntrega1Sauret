import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>

      <Link to={'/'}>

        <h1>GunplArg Hobby Store</h1>
      </Link>

      

        <ul>

          <li>  

            <NavLink to={'/'}>Inicio</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/HG'}>HG</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/MG'}>MG</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/RG'}>RG</NavLink>

          </li>

        </ul>

        

    </div>
  )
}

export default Navbar