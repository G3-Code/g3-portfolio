import React from "react";
import "../style/banner.css";

function Banner() {
  return (
    <section className="banner-area" id="banner">
      <div className="sky-container">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="title">
          <span>
            Hello, I'm Gayathri Ramakrishnan.
            <br />
            <span>I am a full-stack web developer.</span>
            <br />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Banner;
