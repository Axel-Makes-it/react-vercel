import React from "react";
import cardExampleImage from "../images/bearCard.jpg";
import "../styles/ShowCards.css";

function ShowCards() {
  return (
    <>
      <div className="wrapper">
        <div className="round">
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
        <div>
          <img className="card" src={cardExampleImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default ShowCards;
