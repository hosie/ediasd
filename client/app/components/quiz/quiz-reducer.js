const quizReducer = (state, action) => {
  if ( action.type === "QUIZ_REVEAL_ANSWER" ) {
    let newState =  Object.assign({}, state);
    newState.quiz.isRevealed = true;
    return newState;
  } else {
    return state;
  }
}

export default quizReducer;
