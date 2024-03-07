import React, {useState} from "react"

const Contador = () => {
    const [contador,setContador] = useState(0)
  return (
    <>
    <h2>Contador={contador}</h2>
    <button onClick={() => setContador(estado+1)}>Incrementar</button>
    <button onClick={() => setContador(estado-1)}>Decrementar</button>
    </>
  )
}

export default Contador