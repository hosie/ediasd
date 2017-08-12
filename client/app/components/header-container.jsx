import { connect } from 'react-redux'
import EdiasdHeader from "./components/ediasd-header.jsx";

const mapStateToProps = state => {
  return {
    validActions: state.validActions
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(EdiasdHeader)

export default HeaderContainer
