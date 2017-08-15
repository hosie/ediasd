import * as React from "react";
import * as ReactDOM from "react-dom";

const ActionBar = (props) => (
  <div className="action-bar">
    {props.children}
  </div>
);
export default ActionBar;
