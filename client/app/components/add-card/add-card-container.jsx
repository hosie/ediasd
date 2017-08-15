import { connect } from 'react-redux';
import ActionBar from './add-card.jsx';
const mapStateToProps = (state) => {
  return {
    question: state.app.addCard.question
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onOK: (question) => {
        dispatch(
          {
            type: "CARD_ADDED",
            question: question
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
    }
  };
}

const ActionBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar);

export default ActionBarContainer
