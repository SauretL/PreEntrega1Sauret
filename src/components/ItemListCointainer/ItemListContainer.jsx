import React, { useState, useEffect } from "react"
import "./ItemListContainer.css"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("/productos.json")
                const data = await response.json()
                if (categoryId) {
                    const filtroproducts = data.filter((p) => p.categoria == categoryId)
                    setProductos(filtroproducts)
                } else {
                    setProductos(data)
                }
            } catch (error) {
                console.log("Error en el fetch " + error)
            }
        }

        fetchData()

    }, [categoryId])

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <div className="item-grid">
                {productos.length == 0
                    ?
                    <h1>CARGANDO...</h1>
                    :
                    productos.map((producto) => {
                        return (
                            <Link to={`/detail/${producto.id}`} >
                                <div key={producto.id} className="item-box">
                                    <h2>{producto.nombre}</h2>
                                    <h2>Precio: ${producto.precio}</h2>
                                    <h2>Stock:{producto.stock}</h2>
                                    <p>{producto.description}</p>
                                    <img src={producto.img} alt={producto.nombre}></img>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ItemListContainer