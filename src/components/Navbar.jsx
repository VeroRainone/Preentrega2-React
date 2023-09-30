import logoLibreria from "./../assets/logo.jpg";
import "../App.css";
import CartWidget from "./CartWidget.jsx";
import {Link, NavLink} from "react-router-dom";


export default function Navbar (){
    return(
        <header>
            <nav className="navbar">
                <Link to="./">
                    <img className="logo" src={logoLibreria} alt="Logo libreria" />
                </Link>
                <ul>
                    <li> <NavLink to="/category/0-2años">0-2 años</NavLink></li>
                    <li> <NavLink to="/category/3-5años">3-5 años</NavLink></li>
                    <li> <NavLink to="/category/6-8años">6-8 años</NavLink></li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    );
}

