import * as uuid from 'uuid';


const addCardReducer = (state, action) => {
  if(action.type === "ADD_CARD_OK") {
    let newState =  Object.assign({}, state, {});
    try {
      let newCard = {
        id: uuid.v4(),
        question: "This is a new card"
      };
      newState.cards.push(newCard);
    } catch (err) {
      console.log(err);
    }

  } else {
    return state;
  }
}

export default addCardReducer;
