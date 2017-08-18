import { connect } from 'react-redux';
import Quiz from './quiz.jsx';
const mapStateToProps = (state) => {
  return {
    facts: state.data.facts.filter( (fact) => {
      if( state.data.quizes[0].facts.includes(fact.id)){
        return true;
      } else {
        return false;
      }
    }),
    isRevealed: state.app.quiz.isRevealed
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onReveal: () => {
      dispatch({
        type: "QUIZ_REVEAL_ANSWER"
      });
    }
  };
}

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default QuizContainer
