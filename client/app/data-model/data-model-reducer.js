let initialState = {
  facts:[],
  quizes:[]
};

const dataModelReducer = (state = initialState, action) => {
  if(action.type === "DATA_FACT_CREATE_REQUEST") {
    //optimistically, make it so that this fact exists locally
    let newState =  { ...state, facts: [...state.facts]};
    try {
      let newFact = {
        question: action.question,
        answer:   action.answer,
        id:       action.id
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
