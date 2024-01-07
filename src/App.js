import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Basket from "./components/basket/Basket";
import data from "./components/data/Data";
import Footer from "./components/footer/Footer";
import {useState} from "react";

function App() {
  const {products} = data
  const [cardItems, setCardItems] = useState([])

  const onAdd = (product) => {
    const exist = cardItems.find((x) => x.id === product.id)
    if (exist) {
      setCardItems(
          cardItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
          )
      )
    } else {
      setCardItems([...cardItems, {...product, qty: 1}]);
    }
  }

  const onRemove = (product) => {
    const exist = cardItems.find((x) => (x.id === product.id))
    if (exist.qty === 1) {
      setCardItems(cardItems.filter((x) => (x.id !== product.id)))
    }else {
      setCardItems(cardItems.map((x) =>
      x.id === product.id ? {...exist, qty:exist.qty -1} : x
      ))
    }
  }


  return (
   <div>
     <Header/>
     <Products products={products} onAdd={onAdd}/>
     <Basket cardItems={cardItems} onAdd={onAdd} onRemove={onRemove}/>
     <Footer/>
   </div>
  );
}

export default App;
