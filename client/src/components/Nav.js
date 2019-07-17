import React from "react";
import ImgLogo from "../assets/navlogo.png";
import "../style/style.css";
import "../style/nav.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-md navbar-light navbar-default sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="www.gayathri.dev">
          <img class="logo" src={ImgLogo} alt="logo" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
