import React, { useState, } from "react"
import "./Contador.css"

const Contador = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(1)


  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const decrementar = () => {
    if (contador > initial) {
      setContador(contador - 1)
    }
  }

  const agregarCarrito = () => {
    if (contador > 0) {
      onAdd(contador)
    }
    else {
      alert("Agregaste un producto al carrito")
    }
  }

  return (
    <div className="contador-container">
      <h3 className="contador-h3">En carrito={contador}</h3>
      <div className="contador-buttons">
        <button onClick={decrementar}>-</button>
        <button onClick={agregarCarrito}>Agregar al carrito</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  )

}

export default Contador