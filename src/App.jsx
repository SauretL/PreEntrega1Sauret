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
    <ItemListContainer greeting={estado}/>
    </>
  )
}

export default App