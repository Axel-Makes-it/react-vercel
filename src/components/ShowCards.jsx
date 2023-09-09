import React from "react";
import PropTypes from "prop-types";
import "../styles/ShowCards.css";

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  // https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
  // Great algo to randomize what I get from fetching
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ShowCards({ posters, titles }) {
  if (!Array.isArray(posters)) {
    return null;
  }

  const shuffledPosters = shuffleArray([...posters]);
  const shuffledTitles = shuffleArray([...titles]);

  return (
    <div className="showcard__container">
      {/*<h2 className="showcards__category">Popular</h2>*/}
      <div className="wrapper">
        {shuffledPosters.map((poster, index) => (
          <div key={index}>
            <img
              className="card"
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt=""
            />{" "}
            <p className="showcards__title">{shuffledTitles[index]}</p>
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
