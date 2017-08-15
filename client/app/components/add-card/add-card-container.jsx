import { connect } from 'react-redux';
import ActionBar from './add-card.jsx';
const mapStateToProps = (state) => {
  return {
    question: state.app.addCard.question,
    answer:   state.app.addCard.answer,
    phase:    state.app.addCard.phase
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onOK: (cardData) => {
        dispatch(
          {
            type: "CARD_ADDED",
            question: cardData.question,
            answer: cardData.answer
          }
        );
    },
    onCancel: () => {
      dispatch(
        {
          type: "ADD_CARD_CANCEL"
        }
      );
    },
    onQuestionChange: (event) => {
      dispatch(
        {
          type: "ADD_CARD_QUESTION_CHANGE",
          question: event.target.value
        }
      );
    },
    onAnswerChange: (event) => {
      dispatch(
        {
          type: "ADD_CARD_ANSWER_CHANGE",
          answer: event.target.value
        }
      );
    },
    onQuestionEntered: () => {
      dispatch(
        {
          type: "ADD_CARD_QUESTION_ENTERED"
        }
      );
    }
  };
}

const ActionBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar);

export default ActionBarContainer
