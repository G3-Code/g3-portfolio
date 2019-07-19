import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.card.img} alt="portfolio" />
    </div>
  );
}

export default Card;
