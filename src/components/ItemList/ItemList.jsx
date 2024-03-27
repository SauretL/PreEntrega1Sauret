import React from "react"
import { Link } from "react-router-dom"

const ItemList = ({ productos }) => {
    return (
        <div className="item-grid">
            {productos.length === 0 ? (
                <h1>CARGANDO...</h1>
            ) : (
                productos.map((producto) => (
                    <Link to={`/detail/${producto.id}`} key={producto.id}>
                        <div className="item-box">
                            <h2>{producto.nombre}</h2>
                            <h2>Precio: ${producto.precio}</h2>
                            <h2>Stock:{producto.stock}</h2>
                            <p>{producto.description}</p>
                            <img src={producto.img} alt={producto.nombre}></img>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default ItemList;