import React from "react";
import ImgLogo from "../assets/navlogo.png";
import "../style/style.css";
import "../style/nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div class="navbar-container">
      <div class="navbar-subcontainer">
        <div class="left">
          <img class="logo" src={ImgLogo} alt="logo" />
        </div>
        <div class="right">
          <NavLink to="/home" class="nav-items">
            Home
          </NavLink>
          <NavLink to="/about" class="nav-items">
            About
          </NavLink>
          <NavLink to="/portfolio" class="nav-items">
            Portfolio
          </NavLink>
          <NavLink to="/blog" class="nav-items">
            Blog
          </NavLink>
          <NavLink to="/contact" class="nav-items">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
