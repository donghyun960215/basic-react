import React, {useEffect, useState} from 'react';

function Products(props) {
  // const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  // const counter = () => {
  //   setCount((prev) => prev +1)
  // }
  const handleChange = (e) => {
    setChecked((prev) => !prev)
  }

  useEffect(() => {
      fetch(`data/${checked ? "sale_" : ""}products.json`)
        .then(res => res.json())
        .then(data => {
          console.log("네트워크에서 데이터 받아옴")
          setProducts(data);
        })
        return () => {
        console.log("깨끗하게 청소 완료.")
        }
  }, [checked]);



  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/*<button onClick={counter}>{count}</button>*/}
    </>
  );
}

export default Products;