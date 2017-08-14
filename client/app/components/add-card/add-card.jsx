import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "../header/header.jsx";
import ActionBar from '../action-bar/action-bar.jsx';

export default class AddCard extends React.Component {

  render() {
    return (
      <div className="add-card">
        <Header>
          <ActionBar>
            <div>
              OK
            </div>
            <div>
              CANCEL
            </div>
          </ActionBar>
        </Header>
        <h1>Add Card</h1>
      </div>
    )
  }
}
