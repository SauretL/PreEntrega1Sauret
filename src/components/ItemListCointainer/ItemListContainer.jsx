import React, { useState, useEffect } from "react"
import "./ItemListContainer.css"
import {useParams } from "react-router-dom"
import { getDocs, query, where, collection } from "firebase/firestore"
import { db } from "../../firebase/config"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const misProductos = categoryId ?
            query(collection(db, "gunplas"), where("categoria", "==", categoryId)) :
            collection(db, "gunplas")

        getDocs(misProductos)
            .then((res) => {
                const nuevosProductos = res.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data }
                });
                setProductos(nuevosProductos);
            })
            .catch((error) => console.log(error))
    }, [categoryId])

    return (
        <div className="item-list-container">
            <h2>Observen nuestro catalogo de productos</h2>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer