import React from "react";
import "../../style/portfolio.css";
import Tabs from "./Tabs";
import Cards from "./Cards";

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

  selectTabHandler = tab => {
    this.setState(prevState => {
      const filteredCards = prevState.cards.filter(card => {
        //return card.tab === tab;
        return card.tab.includes(tab);
      });
      if (!(filteredCards.length === 0)) {
        return {
          selected: tab,
          filteredCards: filteredCards
        };
      } else {
        return {
          selected: tab,
          filteredCards: this.state.cards
        };
      }
    });
  };

  render() {
    return (
      <section className="portfolio-area" id="portfolio">
        <div className="tabs-container">
          <Tabs
            tabs={this.state.tabs}
            selectedTab={this.state.selected}
            onClick={this.selectTabHandler}
          />
        </div>
        <div className="cards-container">
          <Cards cards={this.state.filteredCards} />
        </div>
      </section>
    );
  }
}

export default Portfolio;
