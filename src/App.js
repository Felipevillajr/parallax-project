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
    setMousePositionY({ top: e.pageX });
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = mousePositionX.left - w;
    let mouseY = mousePositionY.top - h;
    let layer = document.querySelector("#parallax");
    let bg = document.querySelector(".bg");

    bg.style.transform =
      "translateX(-" +
      (0 + mouseX / 1000) +
      "%) translateY(-" +
      (0 + mouseY / 1000) +
      "%)";
    layer.style.transform =
      "translateX(-" +
      (2 + mouseX / 150) +
      "%) translateY(-" +
      (2 + mouseY / 300) +
      "%)";
  }
  // useEffect(() => {});

  return (
    <>
      <div className="bg"></div>
      <div onMouseMove={(e) => handleMouseMove(e)} id="parallax"></div>
    </>
  );
}

export default App;
