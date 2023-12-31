import PropTypes from "prop-types";
import YouTube from "react-youtube";
import "../styles/YouTubeModal.css";

function YouTubeModal({ videoId, onClose }) {
  const opts = {
    width: "400vw",
    height: "300vh",
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
/*
const opts = {
    width: "411.24",
    height: "229.635",
  };

*/
