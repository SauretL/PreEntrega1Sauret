import React from 'react';
import "./ItemDetail.css";
import Contador from '../Contador/Contador';

const ItemDetail = ({ producto }) => {
    return (
        <div className="item-box-detail">
            <h2>{producto.nombre}</h2>
            <h2>Precio: ${producto.precio}</h2>
            <h2>Stock:{producto.stock}</h2>
            <p>{producto.description}</p>
            <img src={producto.img} alt={producto.nombre}></img>
            <Contador initial={1} stock={producto.stock}/>
        </div>
    )
}
export default ItemDetail

