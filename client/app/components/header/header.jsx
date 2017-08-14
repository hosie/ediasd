import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./header.scss";
import ibmIconCss from 'ibm-icon-font/css/ibmicons.css';

export default class EdiasdHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__side-nav-toggle"></div>
        <a className="header__product-name-link" href="https://designer.ediasdonnect.ibmcloud.com">
          <h1 className="header__product-name">EDIASD</h1>
        </a>
        <div className="header__button-container">
          {this.props.children}

        </div>
      </div>
    )
  }
}
