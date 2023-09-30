import "../App.css";
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.jsx';
import {ColorRing} from 'react-loader-spinner';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection (db, "productos");
    
    const collectionRef = categoryId
    ? query(productosRef, where("categoria", "==", categoryId))
    : productosRef;

    getDocs(collectionRef).then((snapshot)=>{
      if (snapshot.size !== 0){
        setProductos(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})));
      }
    });
  }, [categoryId]);
    
  if (!productos || productos.length === 0) {

    return (
      <div>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  } return (
      <div>
        <ItemList productos={productos} />
      </div>
  );
}

