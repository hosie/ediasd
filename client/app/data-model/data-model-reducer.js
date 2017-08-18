import * as uuid from 'uuid';

let initialState = {
  facts:[
    {
      id: 1,
      question: "Who are the people that organise health worldwide?",
      answer: "WHO"
    },
    {
      id: 2,
      question: "what is the name of the Scottish inventor whose steam engine was one of the catalysts for the industrial revolution?",
      answer: "What"
    }
  ],
  quizes:[
    {
      due: "",
      facts: [1,2]
    }
  ]
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

  } else {
    return state;
  }
};

export default dataModelReducer;
