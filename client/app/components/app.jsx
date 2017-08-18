import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./app.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from "./home/home-container.jsx";
import AddFactContainer from "./add-fact/add-fact-container.jsx";
import QuizContainer from "./quiz/quiz-container.js";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomeContainer}/>
      <Route path="/add" component={AddFactContainer}/>
      <Route path="/quiz" component={QuizContainer}/>
    </div>
  </Router>
);

export default App;
