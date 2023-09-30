import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNDCNjmggSxkFsMnnYuhgZBcyTiZg0BIs",
  authDomain: "la-aventura-de-las-letras.firebaseapp.com",
  projectId: "la-aventura-de-las-letras",
  storageBucket: "la-aventura-de-las-letras.appspot.com",
  messagingSenderId: "746524136841",
  appId: "1:746524136841:web:7fac40b1888873e3eebd58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
