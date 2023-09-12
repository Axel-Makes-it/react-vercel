import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/ShowCards.css";
import YouTubeModal from "../components/YouTubeModal";

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ShowCards({ posters, titles, category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [shuffledIndexes, setShuffledIndexes] = useState([]);

  useEffect(() => {
    // Shuffle the indexes once when the component mounts
    setShuffledIndexes(shuffleArray([...Array(posters.length).keys()]));
  }, [posters]);

  const handleCardClick = async (title, index) => {
    try {
      const YOUTUBE_API_KEY = "AIzaSyA1pFqcUBBZ5GoZsz54WgiJFizHCP0LB7Y";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(
          title + " trailer"
        )}&type=video&part=id&maxResults=1&key=${YOUTUBE_API_KEY}`
      );
      const trailerData = await response.json();
      if (trailerData.items && trailerData.items.length > 0) {
        const trailerVideoId = trailerData.items[0].id.videoId;

        setVideoId(trailerVideoId);
        setIsModalOpen(true);
      } else {
        console.error("No trailer found");
      }
    } catch (error) {
      console.error("An error occurred while fetching the trailer:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoId("");
  };

  if (!Array.isArray(posters) || !Array.isArray(titles)) {
    return null;
  }

  return (
    <div className="showcard__container">
      <div className="wrapper">
        {shuffledIndexes.map((index) => (
          <div
            key={index}
            onClick={() => handleCardClick(titles[index], index)}
          >
            <img
              className="card"
              src={`https://image.tmdb.org/t/p/w500${posters[index]}`}
              alt=""
            />
            <p className="showcards__title">{titles[index]}</p>
          </div>
        ))}
      </div>

      {isModalOpen && <YouTubeModal videoId={videoId} onClose={closeModal} />}
    </div>
  );
}

ShowCards.propTypes = {
  posters: PropTypes.array,
  titles: PropTypes.array,
  category: PropTypes.string,
};

export default ShowCards;
