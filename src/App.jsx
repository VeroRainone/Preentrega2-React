import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/CartContext';
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter> 
      <CartContextProvider >
        <Navbar />
        <Routes>
          <Route exact path = "/" element = {<ItemListContainer />}/>
          <Route exact path = "/category/:categoryId" element = {<ItemListContainer/>}/>
          <Route exact path = "/item/:itemId" element = {<ItemDetailContainer/>}/>
          <Route exact path = "/cart" element = {<Cart/>}/>
          <Route exact path = "/checkout" element = {<Checkout/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}
export default App
