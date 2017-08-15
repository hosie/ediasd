import addCardReducer from "./add-card/add-card-reducer.js";

const initialState = {
  addCard: {
    phase:0
  }
};

const appReducer = (state=initialState, action) => {
  //give the component reducers a look in
  let newState = addCardReducer(state, action);

  switch(action.type) {
    case "DISABLE_ADD":
      break;
    case "ENABLE_OK":
      break;
    case "ENABLE_CANCEL":
      break;
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
