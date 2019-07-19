import React from "react";
import "../style/footer.css";
import ImgLinkedIn from "../assets/linkedin.png";
import ImgMedium from "../assets/medium.png";
import ImgGithub from "../assets/github.png";
import ImgTwitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-center">
        <img className="github" src={ImgGithub} alt="Github" />
        <img className="linkedin" src={ImgLinkedIn} alt="LinkedIn" />
        <img className="medium" src={ImgMedium} alt="Medium" />
        <img className="twitter" src={ImgTwitter} alt="Twitter" />
      </div>
    </div>
  );
}

export default Footer;
