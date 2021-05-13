import "./App.scss";
import "./Parallax.js";
import React, { useEffect, useState } from "react";
function App() {
  const [mousePositionX, setMousePositionX] = useState({
    left: 0,
  });

  const [mousePositionY, setMousePositionY] = useState({
    top: 0,
  });

  function handleMouseMove(e) {
    setMousePositionX({ left: e.pageX });
    setMousePositionY({ left: e.pageX });
    if (mousePositionX && mousePositionX === null) magic(e);
  }

  function magic(e) {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = mousePositionX;
    let mouseY = mousePositionY;
    let depth1 = `${50 - (mouseX - w) * 0.01}% 
    ${50 - (mouseY - h) * 0.01}%`;
    let depth2 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`;
    let depth3 = `${50 - (mouseX - w) * 0.06}%
    ${50 - (mouseY - h) * 0.06}%`;
    let x = `${depth3}, ${depth2}, ${depth1}`;
    console.log(x);
    e.style.backgroundPosition = x;
  }

  return (
    <div onMouseMove={(e) => handleMouseMove(e)} id="parallax">
      <h1>Effect</h1>
    </div>
  );
}

export default App;
