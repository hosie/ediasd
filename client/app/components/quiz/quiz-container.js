import { connect } from 'react-redux';
import Quiz from './quiz.jsx';
const mapStateToProps = (state) => {
  return {
    //props from this components UI state
    ...state.app.quiz,
    //and selected/derived data state
    facts: state.data.facts.filter( (fact) => {
      if( state.data.quizes[0].facts.includes(fact.id)){
        return true;
      } else {
        return false;
      }
    })
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onReveal: () => {
      dispatch({
        type: "QUIZ_REVEAL_ANSWER"
      });
    },
    onNext: () => {
      dispatch({
        type: "QUIZ_NEXT"
      });
    }
  };
}

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default QuizContainer
