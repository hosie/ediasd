import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./card.scss";

const Card = (props) => (
  <div className="card">
    Q: {props.cardInfo.question} <br></br>
    <hr></hr>
    A:  {props.cardInfo.answer}
  </div>
);

export default Card;
