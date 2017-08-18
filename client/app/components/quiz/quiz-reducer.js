
const initialState = {
  isRevealed: false
};
const quizReducer = (state = initialState, action) => {
  if ( action.type === "QUIZ_REVEAL_ANSWER" ) {
    let newState =  { ...state, isRevealed: true};
  } else {
    return state;
  }
}

export default quizReducer;
