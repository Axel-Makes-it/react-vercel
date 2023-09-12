import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

function YouTubeModal({ videoId, onClose }) {
  const opts = {
    width: "560",
    height: "315",
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

YouTubeModal.propTypes = {
  videoId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default YouTubeModal;
//AIzaSyA1pFqcUBBZ5GoZsz54WgiJFizHCP0LB7Y
