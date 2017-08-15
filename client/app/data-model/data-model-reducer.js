import * as uuid from 'uuid';

const dataModelReducer = (state = {
  cards:[]
}, action) => {
  if(action.type === "CARD_ADDED") {
    let newState =  Object.assign({}, state, {});
    try {
      let newCard = {
        id: uuid.v4(),
        question: action.question
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
