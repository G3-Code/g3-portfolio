import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../style/style.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Banner} />
      <Route path="/banner" component={Banner} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Nav />
    </Router>
  );
}

export default App;
