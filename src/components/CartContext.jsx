import { createContext, useState } from "react";


export const CartContext = createContext([]);

export function CartContextProvider ({children}){

    const [cart, setCart] = useState([]);

    const totalQty = cart.reduce((total, item) => total + item.quantity, 0);

    const total = cart.reduce((total, item) => total + (item.product.precio * item.quantity), 0);

    
    function updateItemQuantity(productId, newQuantity) {
        
        const updatedCart = cart.map(item => {
            if (item.product.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    }
    
    function addItem(product, productQty) {
        
        const isItemInCart = isInCart(product.id);
    
        if (isItemInCart) {
            // El producto ya está en el carrito, actualiza la cantidad. (funcion updateItemQuantity).
            updateItemQuantity(product.id, productQty);
        } else {
            // El producto no está en el carrito, lo agrego.
            const newProduct = { product, quantity: productQty };
            setCart([...cart, newProduct]);
        }
    }
            
    function removeItem (itemId){
        const updatedCart = cart.filter((item) => item.product.id !== itemId);
        setCart(updatedCart);
    }

    function clear(){
        setCart([]);
    }
    // isInCart: (id) => true|false
    function isInCart (itemId){
        return cart.some((item) => item.product.id === itemId);
    }    
    
    return (
        <CartContext.Provider value = {{cart, addItem, removeItem, clear, isInCart, totalQty, total}}>
            {children}
        </CartContext.Provider>
    );
}
