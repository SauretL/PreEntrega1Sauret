import React, { useState, useContext } from 'react';
import "./ItemDetail.css";
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {

    const [cart, setCart] = useState()

    const {agregarCarrito} = useContext(CartContext)



    const onAdd = (contador) => {

        setCart(true)

        agregarCarrito(producto, contador)

        alert("Agregaste " + contador + " productos al carrito")
    }
    return (
        <div className="item-box-detail">
            <h2>{producto.nombre}</h2>
            <h2>Precio: ${producto.precio}</h2>
            <h2>Stock:{producto.stock}</h2>
            <p>{producto.description}</p>
            <img src={producto.img} alt={producto.nombre}></img>

            {producto.stock == 0 ? <h2>NO HAY STOCK</h2> : (
                cart ? <Link to={"/carrito"}>Ir al carrito</Link> : <Contador initial={1} stock={producto.stock} onAdd={onAdd}/>
            )}


        </div>
    )
}
export default ItemDetail

