import Header from "../header/header.jsx";
import ActionBar from '../action-bar/action-bar.jsx';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import css from "./quiz.scss";
import {Button} from "carbon-components-react";
const Quiz = (props) => (
  <div className="quiz">
    <Header>
      <ActionBar>
        <Link to="/" className="header__button ibm-icon ibm-close-cancel-error">
        </Link>
      </ActionBar>
    </Header>
    <div className="quiz__flash-card-container">
      <div className="quiz-flash-card">
        <div className="quiz-fash-card__content">
          {props.facts[props.currentFactIndex].question}
          {
            props.isRevealed &&
            <div className="quiz-flash-card__answer">
              <hr/>
              {props.facts[props.currentFactIndex].answer}
            </div>
          }
        </div>
        <div className="quiz-fash-card__footer">
          <Button kind="secondary" onClick={props.onReveal}>Reveal</Button>
          {

            (props.currentFactIndex < props.facts.length - 1 ) &&
            <Button kind="secondary" onClick={props.onNext}>Next</Button>
          }
        </div>
      </div>
    </div>
  </div>
);

export default Quiz;
