import React, {useState} from 'react';
import './App.css';
import Products from "./components/Products";

function AppProducts(props) {
  const [showProducts, setShowProducts] = useState(true);

  const onShowProducts = () => {
    setShowProducts((show) =>!show)
  }

  return (
    <div>
      {showProducts && <Products/>}
      <button onClick={onShowProducts}>toggle</button>
    </div>

  );
}

export default AppProducts;