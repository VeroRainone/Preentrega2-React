import "../App.css"

import React from 'react';
import { useEffect, useState } from 'react';
import productosJson from '../productos.json';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.jsx'


function mockAPI(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!id){
        resolve(productosJson);
        }else {
          const productosFiltrados = productosJson.filter((producto) => {
            return producto.categoria === id
          })
          resolve (productosFiltrados)
        }
      }, 2000);
    });
  }
  
  export default function ItemListContainer() {
    const [productos, setProductos] = useState();
    const {id} = useParams ()
    
    useEffect(() => {
        mockAPI(id)
        .then((res) =>  setProductos(res))
    }, [id]);
    
    if (!productos) {
      return <p>Cargando...</p>;
    }
    return (
      <div>
        <ItemList productos = {productos}/>
      </div>
    );
  }
  
