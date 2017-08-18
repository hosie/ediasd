import { connect } from 'react-redux';
import ActionBar from './action-bar.jsx';
const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ActionBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar);

export default ActionBarContainer
