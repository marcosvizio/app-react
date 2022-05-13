import  Navbar  from "./components/Header/Navbar";
import { ItemListContainer } from "./components/Items/ItemListContainer";

function App() {
  return (
    <div className="app gfonts">
      <Navbar />
      <ItemListContainer item={"PS4 500GB $15.000,00"}/>
    </div>
  );
}

export default App;
