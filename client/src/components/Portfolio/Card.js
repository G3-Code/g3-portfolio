import React from "react";
import ImgMenu from "../../assets/menu-more48.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.card.img} alt="portfolio" />
      <div className="card-separator" />
      <div className="card-txt">
        <div className="card-title">
          <div>Project Name: </div>
          <img className="card-img-more" src={ImgMenu} alt="More" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          cumque tempore perspiciatis praesentium accusantium? Eum animi.
        </p>
      </div>
    </div>
  );
}

export default Card;
