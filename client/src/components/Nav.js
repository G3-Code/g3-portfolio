import React from "react";
import ImgLogo from "../assets/navlogo.png";
import "../style/style.css";
import "../style/nav.css";

function Nav() {
  return (
    <div class="navbar-container">
      <div class="navbar-subcontainer">
        <div class="left">
          <img class="logo" src={ImgLogo} alt="logo" />
        </div>
        <div class="right">
          <div class="nav-items">Home</div>
          <div class="nav-items">About</div>
          <div class="nav-items">Portfolio</div>
          <div class="nav-items">Blog</div>
          <div class="nav-items">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
