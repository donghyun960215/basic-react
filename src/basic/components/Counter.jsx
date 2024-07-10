import React, {useState} from 'react';

function Counter({total, totalNumberUp}) {
  const [count, setCount] = useState(0);

  const Count = () => {
    // setCount(count + 1);
    setCount((prev) => prev +1)
    totalNumberUp();
  }



  return (
    <div className="counter">
      <p className="number">
        {count} <span className="total">/ {total}</span>
      </p>
      <button className="button" onClick={Count}>Add +</button>
    </div>
  );
}

export default Counter;