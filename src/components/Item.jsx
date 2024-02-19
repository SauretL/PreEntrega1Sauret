import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {


  return (

    <Link to={`/detalle/${producto.id}`}>

      <div key={producto.id} className='container'>
          <h2>{producto.nombre}</h2>
      </div> 

    </Link>
    
  )
}

export default Item;