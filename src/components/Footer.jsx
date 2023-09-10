import React from "react";
import "../styles/Footer.css";
import LogoPlus from "../images/Logo2.png";

function Footer() {
  const dev = "Axel";
  return (
    <footer>
      <img
        className="footer_logo"
        src={LogoPlus}
        alt="Logos - Hulu, Disney, and ESPN"
        width={250}
      />
      <ul className="footer2">
        <li>Terms of Use</li>
        <li>Made with React</li>
        <li>I'll Turn Design To Code</li>
        <li>2023 | Hulu - Developed by {dev}</li>
      </ul>
    </footer>
  );
}

export default Footer;
