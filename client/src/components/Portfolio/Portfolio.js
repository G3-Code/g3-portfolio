import React from "react";
import "../../style/portfolio.css";
import Tabs from "./Tabs";

import { tabData, cardData } from "../Portfolio/data";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: [],
      filteredCards: []
    };
  }

  componentDidMount() {
    this.setState({
      selected: "all",
      tabs: tabData,
      cards: cardData,
      filteredCards: cardData
    });
  }

  render() {
    return (
      <section className="portfolio-area" id="portfolio">
        <div className="tabs-container">
          <Tabs tabs={this.state.tabs} selectedTab={this.state.selectedTab} />
        </div>
      </section>
    );
  }
}

export default Portfolio;
