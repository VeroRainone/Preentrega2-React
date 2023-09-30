import React from 'react';
import "../App.css";


export default function Item ({producto}) {
  
  return (
    <li className='card' key={producto.id}>
      <img src={producto.imagen} width={200} alt={producto.titulo} />
      <h2 className='item-titulo' >{producto.titulo}</h2>
      <p className='item-autor' >{producto.autor}</p>
      <p className='item-precio' >${producto.precio.toLocaleString()}</p>
      <button className='ver-mas-btn'>ver más</button>
    </li>
    );
  }
  