import React from "react";
import imageLogo from "../images/bearLogo.png";
import "../styles/Banner.css";
import playIcon from "../images/Play.svg";
import backgroundImage from "../images/Bear.png"; // Import your background image

function Banner() {
  return (
    <>
      <div
        className="banner__container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="banner__info">
          <h2 className="banner__info__season">SEASON 2 NOW STREAMING</h2>
          <img src={imageLogo} alt="" />

          <h2 className="banner__info__ep">S1 E1 - System</h2>
          <div className="banner__des__container">
            <h3 className="banner__des">
              Carmy, a young fine-dining chef, comes home to Chicago to run his
              family sandwich shop...
            </h3>
            <h3 className="banner__cat">TVMA • Comedy • 2022</h3>
          </div>
          <div className="banner__btn__container">
            <button className="banner__btn__play">
              {" "}
              <img src={playIcon} alt="" />
              PLAY
            </button>
            <button className="banner__btn__details">DETAILS</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
