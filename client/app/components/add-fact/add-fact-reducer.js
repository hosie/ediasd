import * as uuid from 'uuid';

const initialState = {
  phase:0
};

const addFactReducer = (state = initialState, action) => {
  if ( action.type === "ADD_FACT_QUESTION_CHANGE" ) {

    let newState =  {...state, question: action.question};
    return newState;

  } else if ( action.type === "ADD_FACT_ANSWER_CHANGE" ) {

    let newState =  {...state, answer: action.answer};
    return newState;

  } else if (action.type === "ADD_FACT_QUESTION_ENTERED") {
    let newState = {...state, phase: 1};
    return newState;
  } else if (action.type === "ADD_FACT_OPENED") {
    let newState  = { ...initialState };
    return newState;
  } else {
    return state;
  }
}

export default addFactReducer;
