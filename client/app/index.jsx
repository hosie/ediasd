import * as React from "react";
import * as ReactDOM from "react-dom";
import css from './index.scss';
import EdiasdHeader from "./components/ediasd-header.jsx";
import Home from "./components/home.jsx";
import AddCard from "./components/add-card.jsx";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <EdiasdHeader></EdiasdHeader>
      <Route exact path="/" component={Home}/>
      <Route path="/add" component={AddCard}/>
    </div>
  </Router>,
  document.getElementById('root')
);
