import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./fact.scss";

const Fact = (props) => (
  <div className="fact">
    Q: {props.factInfo.question} <br></br>
    <hr></hr>
    A:  {props.factInfo.answer}
  </div>
);

export default Fact;
