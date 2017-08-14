import * as React from "react";
import * as ReactDOM from "react-dom";

export default class ActionBar extends React.Component {

  render() {
    return (
      <div className="action-bar">
        {this.props.children}
      </div>
    );
  }
}
