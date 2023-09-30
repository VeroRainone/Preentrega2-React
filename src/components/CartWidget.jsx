import carritoLogo from "./../assets/logo-carrito.svg";
import "../App.css";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    
    const {totalQty} = useContext(CartContext);

    return(
        <Link to = "/cart" style = {{display: totalQty > 0 ? "block" : "none"}}>
            <img  className="carrito" src={carritoLogo} alt="Logo Carrito" />  
            <span>{totalQty}</span>
        </Link>          
    )
};

export default CartWidget;
