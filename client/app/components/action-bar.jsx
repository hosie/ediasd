import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./card.scss";


export default class ActionBar extends React.Component {

  render() {
    return (
      <div className="action-bar">
        {
          this.props.actions.map((action)=>
            <div key={action} onClick={()=>this.props.onButtonClick(action)}>{action}</div>
          )
        }
      </div>
    );
  }
}
