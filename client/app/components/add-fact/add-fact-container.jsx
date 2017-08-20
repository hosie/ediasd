import { connect } from 'react-redux';
import ActionBar from './add-fact.jsx';
import {createFact} from '../../data-model/data-model-actions.js';

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
        //create the fact
        dispatch(createFact(factData));
        //close the page
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
