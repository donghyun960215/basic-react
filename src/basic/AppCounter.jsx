import React,{useState} from 'react';
import './App.css';
import Counter from "./components/Counter";

function AppCounter(props) {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className="counter">
      <div className="banner">
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>
      <div className="counters">
        <Counter total={count} totalNumberUp={handleClick}/>
        <Counter total={count} totalNumberUp={handleClick}/>
      </div>
    </div>
  );
}

export default AppCounter;