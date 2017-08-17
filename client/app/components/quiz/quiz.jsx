import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./quiz.scss";

const Quiz = (props) => (
  <div>
  {
    props.cards.map( (card) => (
      <div key={card.id}>
        {card.question}
        <br/>
        {
          props.isRevealed &&
          <div>
            {card.answer}
          </div>
        }
        <hr/>

      </div>
    ))
  }

  <button onClick={props.onReveal}>Reveal</button>
  </div>
);

export default Quiz;
