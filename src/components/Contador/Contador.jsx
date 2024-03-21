import React, { useState, useEffect, useRef } from "react"
import "./Contador.css"

const Contador = ({ initial, stock }) => {
  const [contador, setContador] = useState(1)


  useEffect(
    () => {
      console.log("Cambio cantidad para carrito")
    }, [contador]
  )

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
    if (contador > 1) {
      alert("Agregaste " + contador + " productos al carrito")
    }
    else {
      alert("Agregaste un producto al carrito")
    }
  }

  const contadorRef = useRef(contador)

  const almacenarRef = () => {
    contadorRef.current = contador
    alert("Valor almacenado en ref: " + contadorRef.current)
  }


  return (
    <div className="contador-container">
      <h3 className="contador-h3">Elementos en carrito={contador}</h3>
      <div className="contador-buttons">
        <button onClick={decrementar}>-</button>
        <button onClick={agregarCarrito}>Agregar al carrito</button>
        <button onClick={incrementar}>+</button>
        <button onClick={almacenarRef}>Almacenar contador</button>
      </div>
    </div>
  )

}

export default Contador