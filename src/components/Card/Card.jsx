import React from "react";
import Button from "../Button/Button";

import "./Card.css";
import "../Button/Button.css";

const Card = ({ phrase, author, image, handleClick }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <section className="card" style={cardStyle}>
      <h1>INFOGALAX</h1>
      <div className="phrase__container">
        <p>{phrase}</p>
      </div>
      <Button handleClick={handleClick}/>
      <p className="font" style={{ fontFamily: 'Arial, sans-serif', color: '#ffffff'}}> Fuente: {author}</p>
    </section>
  );
};

export default Card;
