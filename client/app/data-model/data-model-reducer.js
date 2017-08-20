import * as uuid from 'uuid';

let initialState = {
  facts:[],
  quizes:[]
};

const dataModelReducer = (state = initialState, action) => {
  if(action.type === "FACT_ADDED") {
    let newState =  Object.assign({}, state, {});
    try {
      let newFact = {
        id: uuid.v4(),
        question: action.question,
        answer:  action.answer
      };
      newState.facts.push(newFact);
    } catch (err) {
      console.log(err);
    }
    return newState;

  } else if (action.type === "DATA_FACTS_RECEIVE") {
    let newState = {...state, facts: action.facts};
    return newState;
  } else if (action.type === "DATA_QUIZES_RECEIVE") {
    let newState = {...state, quizes: action.quizes};
    return newState;
  } else {
    return state;
  }
};

export default dataModelReducer;
