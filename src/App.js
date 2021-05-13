import "./App.scss";
import "./Parallax.js";
import React, { useEffect, useState } from "react";
import astro from "./Images/astro.png";

function App() {
  function handleMouseMove(e) {
    let w = e.clientX;
    let h = e.clientY;

    let layer = document.querySelector("#astro");

    layer.style.transform =
      "translateX(-" + w / 50 + "%) translateY(-" + h / 50 + "%)";

    console.log(e);
  }

  return (
    <>
      <div className="bg"></div>
      <div onMouseMove={(e) => handleMouseMove(e)} id="parallax">
        <img id="astro" alt="astronaut" src={astro} />
      </div>
    </>
  );
}

export default App;
