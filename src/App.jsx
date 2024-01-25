import React from "react"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListCointainer/ItemListContainer"

function App()  {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>
    </>
  )
}

export default App