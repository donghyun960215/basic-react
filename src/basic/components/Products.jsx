import React, {useState} from 'react';
import useProducts from "../../hooks/use-products";

function Products(props) {
  const [checked, setChecked] = useState(false);
  const [loading, products, error] = useProducts({salesOnly: checked});

  const handleChange = (e) => {
    setChecked((prev) => !prev)
  }

  if(loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

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