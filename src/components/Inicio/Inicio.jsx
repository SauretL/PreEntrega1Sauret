import React, { useState, useEffect } from "react"
import "./Inicio.css"
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore} from "firebase/firestore"

const Inicio = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fetchProductos = async () => {
            const db = getFirestore()
            try {
                const querySnapshot = await getDocs(collection(db, "gunplas"))
                const allProducts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                const randomProducts = getRandomProducts(allProducts, 3)
                setProductos(randomProducts);
            } catch (error) {
                console.error("Error al obtener los productos:", error)
            }
        }

        fetchProductos()
    }, [])

    const getRandomProducts = (array, count) => {
        const shuffled = array.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count);
    }

    return (
        <div className="inicio-list-container">
            <h2>Bienvenidos a nuestra tienda</h2>
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