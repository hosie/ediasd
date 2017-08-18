
const initialState = {
  isRevealed: false
};
const quizReducer = (state = initialState, action) => {
  if ( action.type === "QUIZ_REVEAL_ANSWER" ) {
    let newState =  Object.assign({}, state);
    newState.isRevealed = true;
    return newState;
  } else {
    return state;
  }
}

export default quizReducer;
