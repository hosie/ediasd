import { connect } from 'react-redux';
import Home from './home.jsx';
const mapStateToProps = (state) => {
  return {
    facts: state.data.facts,
    quizesDue: state.data.quizes//TODO filter on due date and isCompleted
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddFact: () => {
      dispatch(
        {
          type: "ADD_FACT_OPENED"
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
