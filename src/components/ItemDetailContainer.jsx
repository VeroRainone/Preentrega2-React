import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from '../productos.json';
import ItemDetail from './ItemDetail.jsx';

function getProducts(itemId) {
  return new Promise((resolve) => {
      if (!itemId){
      resolve(productosJson);
      }else {
        const parseItemId = parseInt (itemId)
        const productosFiltrados = productosJson.filter((producto) =>
           producto.id === parseItemId);
        resolve (productosFiltrados);
      }
  });
}

export default function ItemDetailContainer(){
    const [product, setProduct]= useState();  
    const {itemId} = useParams ()

    useEffect (()=>{
      getProducts(itemId)
        .then ((data) => setProduct(data))
    },[itemId]);
  
    if  (!product) return null;
  
    return (
      <div>
        <ItemDetail product={product[0]} />
      </div>
    );
  }
  