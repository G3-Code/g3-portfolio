import React from "react";
import ImgMenu from "../../assets/menu-more48.png";
import ImgClose from "../../assets/close48.png";

class Card extends React.Component {
  handleClick = e => {
    console.log("handle clicked");
    let card = document.querySelector(".card");
    console.log(card);
    card.style.transform = "rotateY(180deg)";
  };

  handleClose = e => {
    console.log("handle close clicked");
    let card = document.querySelector(".card");
    console.log(card);
    card.style.transform = "rotateY(360deg)";
  };
  render() {
    return (
      <div className="card">
        <div className="card-front">
          <img src={this.props.card.img} alt="portfolio" />
          <div className="card-separator" />
          <div className="card-txt">
            <div className="card-title">
              <div>Project Name: </div>
              <img
                className="card-img-more"
                src={ImgMenu}
                alt="More"
                onClick={this.handleClick}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus cumque tempore perspiciatis praesentium accusantium?
              Eum animi.
            </p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-top">
            This is the back of the card.
            <img
              className="card-img-close"
              src={ImgClose}
              alt="Close"
              onClick={this.handleClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
