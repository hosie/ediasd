
const initialState = {
  isRevealed: false,
  currentFactIndex: 0
};
const quizReducer = (state = initialState, action) => {
  if ( action.type === "QUIZ_REVEAL_ANSWER" ) {
    let newState =  { ...state, isRevealed: true};
    return newState;
  } else if ( action.type === "QUIZ_NEXT" ) {
    let newState = { ...state, isRevealed: false, currentFactIndex: state.currentFactIndex + 1};
    return newState;
  } else {
    return state;
  }
}

export default quizReducer;
