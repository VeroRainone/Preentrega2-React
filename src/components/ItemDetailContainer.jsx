import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import {doc, getDoc, getFirestore} from "firebase/firestore";


export default function ItemDetailContainer() {

  const [product, setProduct] = useState();

  const {itemId} = useParams();
  
  useEffect(()=>{
    const db = getFirestore();

    const docRef = doc (db, "productos", itemId);
      getDoc(docRef).then((snapshot)=>{
        if (snapshot.exists()){
          setProduct({id: snapshot.id, ...snapshot.data() });
        }
    });
  }, [itemId]);
  
    if (!product) return null;
  
    return (
      <div>
        <ItemDetail product={product} />
      </div>
    );
  }
  