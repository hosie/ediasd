import * as React from "react";
import * as ReactDOM from "react-dom";
import css from './index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer  from './components/app-reducer.js';
import App from './components/app.jsx';
import { combineReducers } from 'redux'
import dataModelReducer from './data-model/data-model-reducer.js';
import carbonCss from 'carbon-components/css/carbon-components.css';
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

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
