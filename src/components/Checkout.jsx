import React, { useState, useContext } from 'react';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import  "../App.css";

export default function Checkout() {

  const { clear } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [orderId, SetOrderId] = useState ();
  
  function crearOrden () {
    const db = getFirestore();
    const order = {
      buyer: {
        name: "Hector",
        phone: 11391724,
        email: "Hector@gmail.com",
      },
      items: [{
        name:"Como atrapar una estrella",
        price: 9900,
        id: "kjhad683bnzx3",
        quantity: 1,
       },
       {
        name: "Palabras semilla",
        price: 3950,
        id: "lw1nc73nh6bq",
        quantity: 1,
        }
      ],
      total: 13850,
    };
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, order).then((result) =>
      SetOrderId(result.id));
    clear();
  }
  
  if (orderId){
    return (
      <div>
        <h1 className='titulo-h1'>Datos de la compra</h1>
        <div className='checkout'>
          <h2>Muchas gracias por tu compra</h2>
          <h2>Tu codigo de pedido es: {orderId} </h2>
          <h2>Esperamos que disfrutes tu lectura, te esperamos para una nueva aventura!</h2>
        </div>  
        <Link to ="/" className='ver-mas-btn cart-btn-chekout' >Ir a productos</Link>
      </div>
    );
  }

  return (
    <div>
       <h1 className='titulo-h1'>Complete los datos para finalizar la compra</h1>
      <form className='form'onSubmit={(e)=> e.preventDefault()}>
        <label>Nombre:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className='email'>Email:   
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>Teléfono:
          <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <button onClick={crearOrden} className='ver-mas-btn finalizar-compra'>Finalizar compra</button>
      </form>
    </div>
  );
}
