import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCKCowULAATWnGy95EaxPaXQp9AUtjTC9c",
  authDomain: "proyectocoderreact-46c84.firebaseapp.com",
  projectId: "proyectocoderreact-46c84",
  storageBucket: "proyectocoderreact-46c84.appspot.com",
  messagingSenderId: "420176265830",
  appId: "1:420176265830:web:41edc5e7aeb5c2a33323a7",
  measurementId: "G-W38M1VQG3D"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
