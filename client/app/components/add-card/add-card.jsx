import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "../header/header.jsx";
import ActionBar from '../action-bar/action-bar.jsx';
import {Link} from 'react-router-dom';

export default class AddCard extends React.Component {

  render() {
    return (
      <div className="add-card">
        <Header>
          <ActionBar>
            <Link to="/" onClick={this.props.onOK} className="header__button ibm-icon ibm-success-confirmation">
            </Link>
            <Link to="/" onClick={this.props.onCancel} className="header__button ibm-icon ibm-close-cancel-error">
            </Link>
          </ActionBar>
        </Header>
        <h1>Add Card</h1>
      </div>
    )
  }
}
