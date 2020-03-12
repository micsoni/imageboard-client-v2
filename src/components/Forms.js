import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SingupFormContainer from "./SingupFormContainer";

import React, { Component } from "react";

export default class Forms extends Component {
  render() {
    if (!this.props.userLoggedIn) {
      return (
        <div className="form-row">
          <LoginFormContainer />
          <SingupFormContainer />
        </div>
      );
    }
    if (!this.props.userLoggedIn.jwt) {
      return (
        <div>
          <LoginFormContainer />
        </div>
      );
    } else {
      return (
        <div>
          <CreateFormContainer />
        </div>
      );
    }
  }
}
