import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "../header/header.jsx";
import ActionBar from '../action-bar/action-bar.jsx';
import {Link} from 'react-router-dom';
import {TextArea} from 'carbon-components-react';
import css from './add-card.scss';

export default class AddCard extends React.Component {

  render() {
    let self = this;
    function onOK() {
      self.props.onOK({
        question: self.props.question,
        answer: self.props.answer
      });
    }
    function onNext() {
      self.props.onQuestionEntered();
    }
    return (
      <div className="add-card">
        <Header>
          <ActionBar>
            <Link to="/" onClick={onOK} className="header__button ibm-icon ibm-success-confirmation">
            </Link>
            <Link to="/" onClick={this.props.onCancel} className="header__button ibm-icon ibm-close-cancel-error">
            </Link>

          </ActionBar>
        </Header>
        {
          this.props.phase < 1 &&
          <div onClick={onNext} className="add-card__next-button ibm-icon ibm-next-right-forward"></div>
        }
        <form onSubmit={this.handleSubmit}>
          {
            this.props.phase === 0 &&
            <div>
              <TextArea
                labelText="Question"
                onChange={this.props.onQuestionChange}
                value={this.props.question}
                placeholder="Type a question to test whether you remember this fact"
              />
            </div>
          }
          {
            this.props.phase === 1 &&
            <div>
              <TextArea
                labelText="Answer"
                onChange={this.props.onAnswerChange}
                value={this.props.answer}
                placeholder="Enter the correct answer to the question"
              />
            </div>
          }

        </form>

      </div>
    )
  }
}
