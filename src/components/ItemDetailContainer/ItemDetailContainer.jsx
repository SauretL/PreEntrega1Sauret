import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("/productos.json")
                const data = await response.json()
                const product = data.find((p) => p.id == id)
                setProducto(product)
            } catch (error) {
                alert("Error en el fetch " + error)
            }
        }

        fetchData()

    }, [id])

    return (
        <><ItemDetail producto={producto} /></>
    )
}

export default ItemDetailContainer
