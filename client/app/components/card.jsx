import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./card.scss";

export default class Card extends React.Component {

  render() {
    return (
      <div className="card">
        Q: {this.props.cardInfo.question} <br></br>
        <hr></hr>
        A:  {this.props.cardInfo.answer}
      </div>
    );
  }
}
