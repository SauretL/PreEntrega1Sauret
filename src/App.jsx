import React from "react"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListCointainer/ItemListContainer"
import Contador from "./components/Contador/Contador"

function App()  {

  return (
    <>
    <Contador/>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
    </>
  )
}

export default App