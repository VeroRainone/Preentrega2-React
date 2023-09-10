import React from 'react';
import Item from './Item.jsx';
import { Link } from 'react-router-dom';

export default function ItemList({productos}) {

  return (
    <div>
      <ul className='item-list'>
        {productos.map((producto) => (
          <Link to={`/item/${producto.id}`} key={producto.id}>
            <Item key={producto.id} producto={producto} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
