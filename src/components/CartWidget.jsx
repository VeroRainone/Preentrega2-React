import carritoLogo from "./../assets/logo-carrito.svg"
import "../App.css"

const CartWidget = () =>{
    return(
        <div>
            <img  className="carrito" src={carritoLogo} alt="Logo Carrito" />  
            <span>0</span>
        </div>          
    )
};

export default CartWidget
