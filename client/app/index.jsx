import * as React from "react";
import * as ReactDOM from "react-dom";
import css from './index.scss';
import EdiasdHeader from "./components/ediasd-header.jsx";
import Home from "./components/home.jsx";

ReactDOM.render(
  <div>
    <EdiasdHeader></EdiasdHeader>
    <Home></Home>
  </div>,
  document.getElementById('root')
);
