import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./app.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from "./home/home-container.jsx";
import AddCardContainer from "./add-card/add-card-container.jsx";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomeContainer}/>
      <Route path="/add" component={AddCardContainer}/>
    </div>
  </Router>
);

export default App;
