import React from "react";
import "../style/banner.css";

function Banner() {
  return (
    <section className="banner-area" id="banner">
      <div className="sky-container">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="banner-txt">
          <div className="btext">
            <span className="first-name">&nbsp;Gayathri&nbsp;</span>
            <span className="last-name">&nbsp;Ramakrishnan&nbsp;</span>
          </div>
          <div className="btext">Full stack web developer</div>
          <div className="banner-btn">
            <a href="/portfolio">
              <button>View my portfolio</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
