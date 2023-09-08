import React from "react";

import heroLogo from "../images/bleachLogo.png"; // Corrected path to the image

function Hero() {
  return (
    <div className="banner-container">
      <div className="video-container">
        <video src="./videos/Bleach.mp4" autoPlay muted playsInline></video>
      </div>
      <div className="overlay">
        <div className="banner-info">
          <img src={heroLogo} alt="Bleach Logo" width={348} className="logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
