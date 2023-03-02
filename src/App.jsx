import React, { useState } from "react";
import Card from "./components/Card/Card";
import Data from "./assets/Data.json";
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import img3 from './assets/img/img3.jpg';
import img4 from './assets/img/img4.jpg';

import "./App.css";

function App() {
  const imagenes = [img1, img2, img3, img4];
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * Data.length));
  const [randomImg, setRandomImg] = useState(Math.floor(Math.random() * imagenes.length));

  const handleClick = () => {
    const newIndex = Math.floor(Math.random() * Data.length); 
    const newImage = Math.floor(Math.random() * imagenes.length);
    setRandomIndex(newIndex);
    setRandomImg(newImage);
  }

  const { phrase, author } = Data[randomIndex];

  return (
    <div className="App">
      <Card handleClick={handleClick} phrase={phrase} author={author} image={imagenes[randomImg]} />
    </div>
  );
}

export default App;