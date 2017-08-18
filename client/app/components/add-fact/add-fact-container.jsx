import { connect } from 'react-redux';
import ActionBar from './add-fact.jsx';
const mapStateToProps = (state) => {
  return {
    question: state.app.addFact.question,
    answer:   state.app.addFact.answer,
    phase:    state.app.addFact.phase
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onOK: (factData) => {
        dispatch(
          {
            type: "FACT_ADDED",
            question: factData.question,
            answer: factData.answer
          }
        );
        dispatch(
          {
            type: "ADD_FACT_CLOSED"
          }
        );
    },
    onCancel: () => {
      dispatch(
        {
          type: "ADD_FACT_CANCEL"
        }
      );
    },
    onQuestionChange: (event) => {
      dispatch(
        {
          type: "ADD_FACT_QUESTION_CHANGE",
          question: event.target.value
        }
      );
    },
    onAnswerChange: (event) => {
      dispatch(
        {
          type: "ADD_FACT_ANSWER_CHANGE",
          answer: event.target.value
        }
      );
    },
    onQuestionEntered: () => {
      dispatch(
        {
          type: "ADD_FACT_QUESTION_ENTERED"
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
