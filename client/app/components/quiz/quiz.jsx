import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./quiz.scss";

const Quiz = (props) => (
  <div>
  {
    props.cards.map( (card) => (
      <div key={card.id}>
        {card.question}
        <hr/>
      </div>
    ))
  }
  </div>
);

export default Quiz;
