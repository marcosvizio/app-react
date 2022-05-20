import  Navbar  from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter className="app gfonts">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/products' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
