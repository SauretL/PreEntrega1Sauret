import React, { useState, useEffect, useRef } from "react"

const Contador = () => {
  const [contador, setContador] = useState(1)


  useEffect(
    () => {
      console.log("Cambio cantidad para carrito")
    }, [contador]
  )

  const incrementar = () => {
    if (contador < 10) {
      setContador(contador + 1)
    }
  }

  const decrementar = () => {
    if (contador > 1) {
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
    alert ("Valor almacenado en ref: "+ contadorRef.current)
  }


  return (
    <>
      <h3>Elementos en carrito={contador}</h3>
      <button onClick={incrementar}>+</button>
      <button onClick={agregarCarrito}>Agregar al carrito</button>
      <button onClick={decrementar}>-</button>
      <button onClick={almacenarRef}>Almacenar contador</button>
    </>
  )

}

export default Contador