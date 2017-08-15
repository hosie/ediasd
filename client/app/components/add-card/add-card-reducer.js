import * as uuid from 'uuid';

const addCardReducer = (state, action) => {
  if ( action.type === "ADD_CARD_QUESTION_CHANGE" ) {

    let newState =  Object.assign({}, state);
    newState.addCard.question = action.question;
    return newState;

  } else if ( action.type === "ADD_CARD_ANSWER_CHANGE" ) {

    let newState =  Object.assign({}, state);
    newState.addCard.answer = action.answer;
    return newState;

  } else if (action.type === "ADD_CARD_QUESTION_ENTERED") {
    let newState = Object.assign({}, state, {});
    newState.addCard.phase = 1;
    return newState;
  } else if (action.type === "ADD_CARD_OPENED") {
    let newState = Object.assign({}, state, {});
    newState.addCard = {
      phase: 0,
      question: "",
      answer: ""
    };
    return newState;
  } else {
    return state;
  }
}

export default addCardReducer;
