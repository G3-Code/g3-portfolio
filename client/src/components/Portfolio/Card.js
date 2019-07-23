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
              <div>{this.props.card.projectName} </div>
              <img
                className="card-img-more"
                src={ImgMenu}
                alt="More"
                onClick={this.handleClick}
              />
            </div>
            <p>{this.props.card.description}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-top">
            <div className="card-back-title">Accomplishments</div>
            <img
              className="card-img-close"
              src={ImgClose}
              alt="Close"
              onClick={this.handleClose}
            />
          </div>
          <div className="card-back-center">
            {this.props.card.accomplishment.map((item, map) => (
              <li key="index">{item}</li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
