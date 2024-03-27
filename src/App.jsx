import React from "react"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListCointainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./components/Error/Error"
import Inicio from "./components/Inicio/Inicio"
import AboutUs from "./components/AboutUs/AboutUs"
import Contacto from "./components/Contacto/Contacto"
import Cart from "./components/Cart/Cart"
import CartProvider from "./context/CartContext"
import Checkout from "./components/Checkout/Checkout"

function App() {

  return (
    <>
      <BrowserRouter>

        <CartProvider>

          <NavBar />

          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="productos" element={<ItemListContainer/>} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer greeting={"Observen nuestro catalogo de productos"} />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<Error />} />
          </Routes>

        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App


