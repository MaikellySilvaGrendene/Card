import { useState } from 'react';

export function ChangeBorderColor() {
  const [color, setColor] = useState({
    color: 'black'
  });

  const colors = ['red', 'blueviolet', 'greenyellow', 'goldenrod', 'purple', 'orange',
  'burlywood', 'white', 'black'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const updateBorderColor = () => {
    const randomColor = getRandomColor();
    setColor({ color: randomColor });
  };

  return (
    
    <div id="customizableBorder" style={{ backgroundColor: color.color }}>
      <div id="boxInside"></div>
     
      <button id='borderBottom' onClick={updateBorderColor}>Gerar Background</button>
      <div id="imgContainer" >
       <img id="profileImg"  style={{ borderColor: color.color }}></img> 
      </div>
    </div>
  );
}

