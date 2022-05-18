import  Navbar  from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer"

function App() {
  return (
    <div className="app gfonts">
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
