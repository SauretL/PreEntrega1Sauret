import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore, } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore()

        const nuevoDoc = doc(db, "gunplas", id)
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                const nuevoProducto = { id: res.id, ...data }
                setProducto(nuevoProducto)
            })
            .catch((error) => console.log(error))


    }, [])

    return (
        <><ItemDetail producto={producto} /></>
    )
}

export default ItemDetailContainer
