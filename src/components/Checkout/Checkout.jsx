import React, { useState, useContext } from 'react'
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import "./Checkout.css"

const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirmacion, setEmailConfirmacion] = useState('')
    const [error, setError] = useState('')
    const [ordenId, setOrdenId] = useState('')

    const manejadorFormulario = async (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor, completa los campos requeridos')
            return
        }

        if (email !== emailConfirmacion) {
            setError('Los campos del mail no coinciden')
            return
        }

        const db = getFirestore()

        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        try {
            await Promise.all(
                orden.items.map(async (productoOrden) => {
                    const productoRef = doc(db, "gunplas", productoOrden.id)
                    const productoDoc = await getDoc(productoRef)
                    const stockActual = productoDoc.data().stock

                    await updateDoc(productoRef, {
                        stock: stockActual - productoOrden.cantidad
                    });
                })
            );

            const docRef = await addDoc(collection(db, 'ordenes'), orden)
            setError('')
            setOrdenId(docRef.id)
            vaciarCarrito()
        } catch (error) {
            console.log(error)
            setError('Se produjo un error al crear la orden')
        }
    };

    return (
        <div className="checkout-container">
            <h1>Ingresa tus datos</h1>

            <div className="items-container">
                {cart.map((producto) => (
                    <div key={producto.producto.id} className="gunplas">
                        <p>
                            {producto.producto.nombre} x {producto.cantidad} - Precio: ${producto.producto.precio * producto.cantidad}
                        </p>
                    </div>
                ))}
            </div>

            <p className="total">Total en carrito: ${totalCarrito()}</p>

            <form onSubmit={manejadorFormulario} className="form-container">
                <div className="form-field">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="emailConfirmacion">Confirmar Email</label>
                    <input
                        type="email"
                        id="emailConfirmacion"
                        value={emailConfirmacion}
                        onChange={(e) => setEmailConfirmacion(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Completar compra</button>
                {error && <p className="error-message">{error}</p>}
                {ordenId && <p className="success-message">¡Gracias por tu compra! Tu número de orden es: {ordenId}</p>}
            </form>
        </div>
    );
};

export default Checkout