import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk';
import * as React from "react";
import * as ReactDOM from "react-dom";
import css from './index.scss';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import appReducer  from './components/app-reducer.js';
import App from './components/app.jsx';
import dataModelReducer from './data-model/data-model-reducer.js';
import carbonCss from 'carbon-components/css/carbon-components.css';
import {fetchFacts, fetchQuizes} from './data-model/data-model-actions.js';

const reducer = combineReducers({
  app: appReducer,
  data: dataModelReducer
});
// structure of the combined reducers reflects the structure of the state Object
/*
{
  app: {UI state of the application and its components},
  data: {data model i.e. server side state}
}
*/

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

let store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logger)
);

store.dispatch(fetchFacts());
store.dispatch(fetchQuizes());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
