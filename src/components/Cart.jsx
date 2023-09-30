import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import "../App.css";

export default function Cart() {

    const { cart, removeItem, clear, totalQty, total } = useContext(CartContext);

    if (totalQty === 0) {
        return (
            <div className='sin-productos'>
                <h1> No hay productos en el carrito </h1>
                <Link className='ver-mas-btn cart-btn-chekout' to="/" >Ir a productos</Link>
            </div>
        )
    } return (
        <div>
            <h1 className='titulo-h1'>Bienvenidos al carrito</h1>
            {cart.map((item) => (
                <div className='cart-item' key={item.product.id}>
                    <img src={item.product.imagen} width={200} alt={item.product.titulo} />
                    <div className='cart-description'>
                        <h2 className='item-titulo'>{item.product.titulo}</h2>
                        <p className='cart-cantidad'>Cantidad: {item.quantity}</p>
                        <p className='item-precio'>Precio por unidad: ${item.product.precio.toLocaleString()}</p>
                        {item.quantity !== 1 && ( <p className='item-precio' >Precio según cantidad: ${(item.product.precio * item.quantity).toLocaleString()}</p> )}
                        <button className='ver-mas-btn cart-btn-eliminar' onClick={() => removeItem(item.product.id)}>Eliminar producto </button>
                    </div>
                </div>
            ))}
            <h2 className='cart-total'>Total: ${total.toLocaleString()}</h2>
            <button className='ver-mas-btn cart-btn-clear' onClick={() => clear()}>Vaciar carrito</button>
            <div className='item-detail-btns'>
                <Link className='ver-mas-btn cart-btn-chekout' to="/checkout">Finalizar compra</Link>
            </div>
        </div>
    )
}
