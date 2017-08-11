import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./ediasd-header.scss";
import ibmIconCss from 'ibm-icon-font/css/ibmicons.css';

export default class EdiasdHeader extends React.Component {
  render() {
    return (
      <div className="ediasd-header">
        <div className="ediasd-header__side-nav-toggle"></div>
        <a className="ediasd-header__product-name-link" href="https://designer.ediasdonnect.ibmcloud.com">
          <h1 className="ediasd-header__product-name">EDIASD</h1>
        </a>
        <div className="ediasd-header__button-container">
          <div className="ediasd-header__button ibm-icon ibm-add-new"></div>
        </div>


      </div>
    )
  }
}
