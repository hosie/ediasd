import * as React from "react";
import * as ReactDOM from "react-dom";
import css from './index.scss';
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import AddCard from "./components/add-card/add-card.jsx";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  validActions: [
    "ADD"
  ]
};

const appReducer = (state=initialState, action) => {
  if(action) {
    console.log("ACTION:", action.type);

  }else{
    console.log("ACTION: null");
  }
  switch(action.type) {
    case "DISABLE_ADD":
      break;
    case "ENABLE_OK":
      break;
    case "ENABLE_CANCEL":
      break;
    case "ADD":
      let newState =  Object.assign({}, state, {
        validActions: ["OK", "CANCEL"]
      })
      console.log("newState:" + JSON.stringify(newState));
      return newState;
      break;
    default:
      return state;
  }
};

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

let store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header></Header>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={AddCard}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
