import React, { useState, useEffect } from "react"
import "./ItemListContainer.css"
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const misProductos = categoryId ?
            query(collection(db, "gunplas"), where("categoria", "==", categoryId))
            :
            collection(db, "gunplas")

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }

                })
                setProductos(nuevosProductos)
            })
            .catch((error) => console.log(error) )

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