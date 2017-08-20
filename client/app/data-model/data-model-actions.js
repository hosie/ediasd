import 'whatwg-fetch';

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
