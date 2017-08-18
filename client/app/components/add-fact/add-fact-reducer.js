import * as uuid from 'uuid';

const addFactReducer = (state, action) => {
  if ( action.type === "ADD_FACT_QUESTION_CHANGE" ) {

    let newState =  Object.assign({}, state);
    newState.addFact.question = action.question;
    return newState;

  } else if ( action.type === "ADD_FACT_ANSWER_CHANGE" ) {

    let newState =  Object.assign({}, state);
    newState.addFact.answer = action.answer;
    return newState;

  } else if (action.type === "ADD_FACT_QUESTION_ENTERED") {
    let newState = Object.assign({}, state, {});
    newState.addFact.phase = 1;
    return newState;
  } else if (action.type === "ADD_FACT_OPENED") {
    let newState = Object.assign({}, state, {});
    newState.addFact = {
      phase: 0,
      question: "",
      answer: ""
    };
    return newState;
  } else {
    return state;
  }
}

export default addFactReducer;
