import React from 'react';


export default function ItemDetail({ product }) {

    return (
      <div className='item-detail' key={product.id}>
        <img src={product.imagen} className='card' width={350} alt={product.titulo} />
        <div className='descripcion'>
          <h2 className='item-titulo'>{product.titulo}</h2>
          <p className='item-autor'>Autor: {product.autor}</p>
          <p className='item-descripcion'>{product.descripcion}</p>
          <p><strong>Precio: </strong>${product.precio}</p>
        </div>
      </div>
    );
  }
  