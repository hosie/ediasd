import * as uuid from 'uuid';

const addCardReducer = (state, action) => {
  if(action.type === "ADD_CARD_OK") {
    let newState =  Object.assign({}, state, {});
    try {
      let newCard = {
        id: uuid.v4(),
        question: state.addCard.question
      };
      newState.data.cards.push(newCard);
    } catch (err) {
      console.log(err);
    }
    return newState;

  } else if ( action.type === "ADD_CARD_QUESTION_CHANGE" ) {

    let newState =  Object.assign({}, state, {
      addCard: {
        question: action.question
      }
    });
    return newState;

  } else {
    return state;
  }
}

export default addCardReducer;
