import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.card.img} alt="portfolio" />
      <div className="card-separator" />
      <div className="card-txt">This is a sample text</div>
    </div>
  );
}

export default Card;
