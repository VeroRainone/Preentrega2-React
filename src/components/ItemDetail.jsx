import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import "../App.css";

export default function ItemDetail({ product }) {

  const {addItem} = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);
  
  const onAdd = (qty) => {
    // qty es la cantidad que eligio el usuario (count)
    // Llama a la función addItem para agregar el producto al carrito
    if (qty > 0) {
      addItem(product, qty);
    }
    setCantidad(qty);
  };

  return (
    <div className='item-detail' key={product.id}>
      <img src={product.imagen} className='card' width={350} height={300} alt={product.titulo} />
      <div className='descripcion'>
        <h2 className='item-titulo'>{product.titulo}</h2>
        <p className='item-autor'>Autor: {product.autor}</p>
        <p className='item-descripcion'>{product.descripcion}</p>
        <p className='item-precio'> Precio: ${product.precio.toLocaleString()}</p>
        <div className='item-detail-btns'>
          <ItemCount stock={product.stock} onAdd={onAdd} />
          {cantidad > 0 && (<Link className='ver-mas-btn finalizar-compra' to="/cart">Finalizar compra</Link>)}
        </div>
      </div>
    </div>
  );
} 
