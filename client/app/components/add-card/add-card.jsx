import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "../header/header.jsx";
import ActionBar from '../action-bar/action-bar.jsx';
import {Link} from 'react-router-dom';

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
        <h1>Add Card</h1>
        <form onSubmit={this.handleSubmit}>
          {
            this.props.phase === 0 &&
            <div>
              <label>Question:</label>
              <textarea type="text" value={this.props.question} onChange={this.props.onQuestionChange} />
            </div>
          }
          {
            this.props.phase === 1 &&
            <div>
              <label>Answer:</label>
              <textarea type="text" value={this.props.answer} onChange={this.props.onAnswerChange} />
            </div>
          }

        </form>
        {
          this.props.phase < 1 &&
          <div onClick={onNext} className="ibm-icon ibm-next-right-forward"></div>
        }
      </div>
    )
  }
}
