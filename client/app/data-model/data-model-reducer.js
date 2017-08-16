import * as uuid from 'uuid';

let initialState = {
  cards:[
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
      cards: [1,2]
    }
  ]
};

const dataModelReducer = (state = initialState, action) => {
  if(action.type === "CARD_ADDED") {
    let newState =  Object.assign({}, state, {});
    try {
      let newCard = {
        id: uuid.v4(),
        question: action.question,
        answer:  action.answer
      };
      newState.cards.push(newCard);
    } catch (err) {
      console.log(err);
    }
    return newState;

  } else {
    return state;
  }
};

export default dataModelReducer;
