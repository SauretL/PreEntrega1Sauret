import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ id }) => {

    const [producto, setProducto] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("./productos.json")
                const data = await response.json()
                const product = data.find((p) => p.id == id)
                setProducto(product)
            } catch (error) {
                console.log("Error en el fetch " + error)
            }
        }

        fetchData()

    }, [id])

    return (
        <><ItemDetail producto={producto}/></>
    )
}

export default ItemDetailContainer
