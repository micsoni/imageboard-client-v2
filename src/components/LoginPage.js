import React from "react";
import { getImages } from "../store/actions/images";
import { connect } from "react-redux";
import "./LoginPage.css";
import LoginFormContainer from "./LoginFormContainer";
import { Link, Redirect } from "react-router-dom";

class LoginPage extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    if (!this.props.userLoggedIn.jwt) {
      return (
        <div>
          <LoginFormContainer />
          <p>Not a member yet?</p>
          <Link to="/signup">join us</Link>
        </div>
      );
    }
    return <Redirect to="/myimageboard" />;
  }
}
function mapStateToProps(state) {
  return { images: state.images.all, userLoggedIn: state.userLoggedIn };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
