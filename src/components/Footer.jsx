import React from "react";
import "../styles/Footer.css";
import LogoPlus from "../images/Logo2.png";

function Footer() {
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
        <li>Privacy Policy</li>
        <li>I'll Turn Design To Code</li>
        <li>2023 | Hulu By Axel</li>
      </ul>
    </footer>
  );
}

export default Footer;
