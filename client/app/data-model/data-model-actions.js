import 'whatwg-fetch';
import {factAPI} from './data-model-api.js';
import * as uuid from 'uuid';

const requestFacts = () => (
  {
    type: "DATA_FACTS_REQUEST"
  }
);

const receiveFacts = (facts) => (
  {
    type: "DATA_FACTS_RECEIVE",
    facts: facts
  }
);

export function fetchFacts() {
  return function(dispatch) {
    dispatch(requestFacts);
    return fetch('/api/v1/facts')
    .then((response) => (response.json()))
    .then((responseObj) => (dispatch(receiveFacts(responseObj))));
  }
}

const requestQuizes = () => (
  {
    type: "DATA_QUIZES_REQUEST"
  }
);

const receiveQuizes = (quizes) => (
  {
    type: "DATA_QUIZES_RECEIVE",
    quizes: quizes
  }
);

export function fetchQuizes() {
  return function(dispatch) {
    dispatch(requestQuizes);
    return fetch('/api/v1/quizes')
    .then((response) => (response.json()))
    .then((responseObj) => (dispatch(receiveQuizes(responseObj))));
  }
}

const createFactResponse = (id) => (
  {
    type: "DATA_FACT_CREATE_RESPONSE",
    id: id
  }
);

const createFactRequest = (fact) => (
  {
    ...fact,
    type: "DATA_FACT_CREATE_REQUEST",
  }
);

export function createFact(fact) {
  return function(dispatch) {
    let id = uuid.v4();
    let newFact = {...fact, id: id };
    dispatch(createFactRequest(newFact));
    return factAPI.create(newFact)
    .then( () => (dispatch(createFactResponse(id))));
  }
}
