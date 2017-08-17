import addCardReducer from "./add-card/add-card-reducer.js";
import quizReducer from "./quiz/quiz-reducer.js";

const initialState = {
  addCard: {
    phase:0
  },
  quiz: {
    isRevealed: false
  }
};

const appReducer = (state=initialState, action) => {
  //give the component reducers a look in
  let newState =  Object.assign({}, state)
  newState = addCardReducer(newState, action);
  newState = quizReducer(state,action);

  switch(action.type) {
    case "ADD":
      let newState1 =  Object.assign({}, newState, {
        validActions: ["OK", "CANCEL"]
      })
      return newState1;
      break;
    default:
      return newState;
  }
};

export default appReducer;
