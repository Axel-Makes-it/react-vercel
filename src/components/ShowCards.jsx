import React from "react";
import PropTypes from "prop-types";
import "../styles/ShowCards.css";

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ShowCards({ posters, titles }) {
  if (!Array.isArray(posters) || !Array.isArray(titles)) {
    return null;
  }

  // Create an array of shuffled indexes
  const shuffledIndexes = shuffleArray(
    Array.from(Array(posters.length).keys())
  );

  return (
    <div className="showcard__container">
      <div className="wrapper">
        {shuffledIndexes.map((index) => (
          <div key={index}>
            <img
              className="card"
              src={`https://image.tmdb.org/t/p/w500${posters[index]}`}
              alt=""
            />
            <p className="showcards__title">{titles[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

ShowCards.propTypes = {
  posters: PropTypes.array,
  titles: PropTypes.array,
};

export default ShowCards;
