import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Home } from './views/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Products } from "./views/Products/Products";
import { Product } from "./views/Product/Product";
import { Cart } from './components/Cart/Cart';
import { CheckOut } from './views/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/category/:categoryId' element={<Products/>} />
          <Route exact path='/detail/:id' element={<Product/>} />
          <Route exact path='/checkout' element={<CheckOut/>} />
        </Routes>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
