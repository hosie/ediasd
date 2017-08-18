import { combineReducers } from 'redux'
import addFactReducer from "./add-fact/add-fact-reducer.js";
import quizReducer from "./quiz/quiz-reducer.js";

const appReducer = combineReducers({
  addFact: addFactReducer,
  quiz: quizReducer
});

export default appReducer;
