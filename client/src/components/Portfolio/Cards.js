import React from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div className="cards">
      {props.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Cards;
