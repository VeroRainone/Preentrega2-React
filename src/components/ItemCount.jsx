import { useState } from "react";
import "../App.css";

    
export default function ItemCount ({stock, onAdd}){

  const [count, setCount]= useState(1)
  
  const onIncrease = () => {
    count < stock && setCount(count + 1) 
  }

  const onDecrease = () => {
    count > 1 && setCount(count - 1)
  }

  return (
    <div>
      <div>
        <button className="ver-mas-btn increase-btn" onClick={onDecrease} >-</button>
        <span>{count}</span>
        <button className="ver-mas-btn increase-btn" onClick={onIncrease}>+</button>
      </div>
      <button className="ver-mas-btn agregar-al-carrito" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}