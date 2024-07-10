import React, {useState} from 'react';
import './AppXY.css';

function AppXy(props) {
  const [position, setPosition] = useState({x: 0, y: 0});

  const xyhandler = (e) => {
    setPosition({x:e.clientX, y:e.clientY});
    // 만약 수평으로 이동이 하고싶다면
    // setPosition((prev) => ({x:e.clientX, y:prev.y}))
    // 만약 여러개의 상태값중 하나면 변경을 해야한다면
    // setPosition((prev)=>({...prev, x:e.clientX}));
  }

  return (
    <div className="container" onMouseMove={xyhandler}>
      <div className="pointer" style={{
        transform: `translate(${position.x}px,${position.y}px)`,
      }}/>
    </div>
  );
}

export default AppXy;