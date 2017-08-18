import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./quiz.scss";

const Quiz = (props) => (
  <div>
    {props.facts[props.currentFactIndex].question}
    <br/>
    {
      props.isRevealed &&
      <div>
        {props.facts[props.currentFactIndex].answer}
      </div>
    }
    <hr/>
    <button onClick={props.onReveal}>Reveal</button>
    {
      (props.currentFactIndex < props.facts.length - 1 ) &&
      <button onClick={props.onNext}>Next</button>
    }

  </div>
);

export default Quiz;
