import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import About from "./About";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/style.css";

function App() {
  return (
    <Router>
      <Nav />
      <Banner />
      <About />
      <Portfolio />
      <Blog />
    </Router>
  );
}

export default App;
