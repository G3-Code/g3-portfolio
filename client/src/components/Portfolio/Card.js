import React from "react";
import ImgMenu from "../../assets/menu-more48.png";
import ImgClose from "../../assets/close48.png";
import ImgLink from "../../assets/card-link52.png";
import ImgGithub from "../../assets/card-github64.png";

class Card extends React.Component {
  handleClick = e => {
    console.log("handle clicked");
    let card = document.querySelector(
      `.card[data-card="${this.props.card.id}"]`
    );
    console.log(card);
    // let card = cards[this.props.card.id];
    card.style.transform = "rotateY(180deg)";
  };

  handleClose = e => {
    console.log("handle close clicked");
    let card = document.querySelector(
      `.card[data-card="${this.props.card.id}"]`
    );
    console.log(card);
    card.style.transform = "rotateY(360deg)";
  };
  render() {
    return (
      <div className="card" data-card={this.props.card.id}>
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
            {this.props.card.accomplishment.map(item => (
              <li key={item.id}>{item.desc}</li>
            ))}
          </div>
          <div className="card-back-bottom">
            <img className="card-img-el" src={ImgLink} alt="View Online" />
            <img className="card-img-gh" src={ImgGithub} alt="View in Github" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
