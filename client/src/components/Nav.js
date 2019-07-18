import React from "react";
import ImgLogo from "../assets/navlogo.png";
import "../style/nav.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  handleClick = e => {
    console.log("clicked hamburger");
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".right");
    const navLinks = document.querySelectorAll(".nav-items");
    nav.classList.toggle("nav-active");
    // toggle nav to animate things

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    burger.classList.toggle("toggle");
  };

  render() {
    return (
      <nav>
        <div className="navbar-subcontainer">
          <div className="left">
            <img className="logo" src={ImgLogo} alt="logo" />
          </div>
          <div className="right">
            <NavLink to="/banner" className="nav-items">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-items">
              About
            </NavLink>
            <NavLink to="/portfolio" className="nav-items">
              Portfolio
            </NavLink>
            <NavLink to="/blog" className="nav-items">
              Blog
            </NavLink>
            <NavLink to="/contact" className="nav-items">
              Contact
            </NavLink>
          </div>
          <div className="burger" onClick={this.handleClick}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
