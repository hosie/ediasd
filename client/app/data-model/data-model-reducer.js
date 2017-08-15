import * as uuid from 'uuid';

let initialState = {
  cards:[]
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
