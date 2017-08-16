import { connect } from 'react-redux';
import Home from './home.jsx';
const mapStateToProps = (state) => {
  return {
    cards: state.data.cards,
    quizesDue: state.data.quizes//TODO filter on due date and isCompleted
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: () => {
      dispatch(
        {
          type: "ADD_CARD_OPENED"
        }
      );
    }
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer
