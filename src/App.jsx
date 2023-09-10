import './App.css'
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route exact path="/"element={<ItemListContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer/>}/>
        <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
