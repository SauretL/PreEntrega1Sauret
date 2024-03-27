import React, { useState, useEffect } from "react"
import "./Inicio.css"
import { Link } from "react-router-dom"

const Inicio = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./productos.json")
                const data = await response.json()
                const randomProductos = getRandomProducts(data, 3)
                setProductos(randomProductos);
            } catch (error) {
                console.log("Error en el fetch " + error)
            }
        };

        fetchData()
    }, []);

    const getRandomProducts = (array, count) => {
        const shuffled = array.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    };

    return (
        <div className="inicio-list-container">
            <h2>{greeting}</h2>
            <div className="inicio-grid">
                {productos.length === 0 ? (
                    <h1>CARGANDO...</h1>
                ) : (
                    productos.map((producto) => {
                        return (
                            <Link to={`/detail/${producto.id}`} >
                            <div key={producto.id} className="inicio-box">
                                <h2>{producto.nombre}</h2>
                                <h2>Precio: ${producto.precio}</h2>
                                <h2>Stock: {producto.stock}</h2>
                                <p>{producto.description}</p>
                                <img src={producto.img} alt={producto.nombre}></img>
                            </div>
                            </Link>

                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Inicio