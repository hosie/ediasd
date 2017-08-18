import { connect } from 'react-redux'
import Header from "./header.jsx";

const mapStateToProps = state => {
  return {
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer
