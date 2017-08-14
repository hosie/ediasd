import { connect } from 'react-redux';
import ActionBar from './add-card.jsx';
const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onOK: () => {
        dispatch(
          {
            type: "ADD_CARD_OK"
          }
        );
      },
      onCancel: () => {
        dispatch(
          {
            type: "ADD_CARD_CANCEL"
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
