import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import  Navbar  from "./components/Navbar/Navbar";
import { Home } from './views/Home/Home';
import { Products } from "./views/Products/Products";
import { Product } from "./views/Product/Product";
import { Cart } from "./views/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/category/:categoryId' element={<Products/>} />
          <Route exact path='/detail/:id' element={<Product/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
