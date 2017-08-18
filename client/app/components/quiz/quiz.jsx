import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./quiz.scss";

const Quiz = (props) => (
  <div>
  {
    props.facts.map( (fact) => (
      <div key={fact.id}>
        {fact.question}
        <br/>
        {
          props.isRevealed &&
          <div>
            {fact.answer}
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
