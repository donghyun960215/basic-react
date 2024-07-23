import React, {useState, useEffect} from 'react';
import './App.css';
import Products from "./components/Products";

function AppProducts(props) {
  const [showProducts, setShowProducts] = useState(true);
  const [hidden, setHidden] = useState(false);

  const onShowProducts = () => {
    setShowProducts((show) =>!show)
  }


  const handleKeyDown = (e) => {
    console.log(`Key: ${e.key}, Code: ${e.code}, MetaKey: ${e.metaKey}, ShiftKey: ${e.shiftKey}, CtrlKey: ${e.ctrlKey}`);
      if (
        (e.key === 'PrintScreen' || e.code === 'PrintScreen') ||
        (e.ctrlKey && e.key === 's') || // Ctrl + S (Windows)
        (e.ctrlKey || e.shiftKey && e.key === 'z') || // Ctrl + Shift + S (Windows)
        (e.metaKey && e.shiftKey )  //(Mac)
        // (e.metaKey && e.shiftKey && e.key === 't')
      )
      {
        e.preventDefault();
        setHidden(true);
        setTimeout(() => setHidden(false), 2000); // 2초 후에 다시 콘텐츠를 표시합니다.
      }
  };

  useEffect(() => {
    const keydownListener = (e) => {
      handleKeyDown(e);
    };
    window.addEventListener('keydown', keydownListener);
    return () => {
      window.removeEventListener('keydown', keydownListener);
    };
  }, []);

  return (
    <>
      <div className={`protected-content ${hidden ? 'hidden' : ''}`}>
        {showProducts && <Products/>}
        <button onClick={onShowProducts}>toggle</button>
      </div>
      {hidden && <div className="overlay">캡쳐 금지</div>}
    </>
  );
}

export default AppProducts;