import React,{useState,useEffect} from "react"

const ItemListContainer = ({greeting}) => {

    const [productos,setProductos] = useState([])

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                const response = await fetch("./productos.json")
                const data = await response.json()
                setProductos(data)
            }catch(error){
                console.log("Error en el fetch "+error)
            }
        }

        fetchData()

    },[])

    return (
        <>
        <h2>{greeting}</h2>

        {productos.length == 0 
        ? 
        <h1>CARGANDO...</h1> 
        : 
        productos.map((producto,indice)=>{
            return(
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <h2>{producto.precio}</h2>
                    <h2>{producto.stock}</h2>
                    <p>{producto.description}</p>
                </div>
            )
        })
        }
        </>

    )
}

export default ItemListContainer