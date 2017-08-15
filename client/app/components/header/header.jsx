/*
 * Standard page header that can be included in any page.
 * <ActionBar> can be specified as a child and will be rendered at the appropriate
 * part of the header.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./header.scss";
import ibmIconCss from 'ibm-icon-font/css/ibmicons.css';

const Header = (props) => (
  <div className="header">
    <div className="header__side-nav-toggle"></div>
    <a className="header__product-name-link" href="https://designer.ediasdonnect.ibmcloud.com">
      <h1 className="header__product-name">EDIASD</h1>
    </a>
    <div className="header__button-container">
      {props.children}
    </div>
  </div>
);

export default Header;
