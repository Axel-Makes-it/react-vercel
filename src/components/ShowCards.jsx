import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import "../styles/ShowCards.css";

function ShowCards({ posters, titles }) {
  if (!Array.isArray(posters)) {
    return null;
  }

  return (
    <div className="showcard__container">
      <div className="wrapper">
        {posters.map((poster, index) => (
          <div key={index}>
            <img
              className="card"
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt=""
            />{" "}
            <p className="showcards__title">{titles[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

ShowCards.propTypes = {
  posters: PropTypes.array,
};

export default ShowCards;
