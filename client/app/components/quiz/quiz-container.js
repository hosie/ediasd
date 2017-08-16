import { connect } from 'react-redux';
import Quiz from './quiz.jsx';
const mapStateToProps = (state) => {
  return {
    cards: state.data.cards.filter( (card) => {
      if( state.data.quizes[0].cards.includes(card.id)){
        return true;
      } else {
        return false;
      }
    })
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default QuizContainer
