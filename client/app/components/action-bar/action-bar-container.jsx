import { connect } from 'react-redux';
import ActionBar from './action-bar.jsx';
const mapStateToProps = (state) => {
  return {
     actions : state.validActions
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: actionId => {
      switch(actionId){
      case "ADD":
        dispatch(
          {
            type: "ADD"
          }
        );
        break;
      case "OK":
        break;
      case "CANCEL":
        break;
      default:
        break;
      }
    }
  }
}

const ActionBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar);

export default ActionBarContainer
