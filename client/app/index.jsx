import * as React from "react";
import * as ReactDOM from "react-dom";
import css from './index.scss';
import HomeContainer from "./components/home/home-container.jsx";
import AddCardContainer from "./components/add-card/add-card-container.jsx";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addCardReducer from "./components/add-card/add-card-reducer.js";

const initialState = {
  validActions: [
    "ADD"
  ],
  cards: []
};

const appReducer = (state=initialState, action) => {
  //give the component reducers a look in
  let newState = addCardReducer(state, action);
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
      let newState =  Object.assign({}, newState, {
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
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/add" component={AddCardContainer}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
