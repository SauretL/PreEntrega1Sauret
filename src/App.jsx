import React from "react"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListCointainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a la tienda"} />
      <ItemDetailContainer id={2}/>
    </>
  )
}

export default App

// CLASE 9 MINUTO 23