import React, { useState, useEffect } from "react"

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("./productos.json")
                const data = await response.json()
                setProductos(data)
            } catch (error) {
                console.log("Error en el fetch " + error)
            }
        }

        fetchData()

    }, [])

    return (
        <>
            <h2>{greeting}</h2>

            {productos.length == 0
                ?
                <h1>CARGANDO...</h1>
                :
                productos.map((producto) => {
                    return (

                        <div key={producto.id}>
                            <h2>{producto.nombre}</h2>
                            <h2>Precio: ${producto.precio}</h2>
                            <h2>Stock:{producto.stock}</h2>
                            <p>{producto.description}</p>
                            <img src={producto.img} alt={producto.nombre}></img>
                        </div>
                    )
                })
            }
        </>

    )
}

export default ItemListContainer