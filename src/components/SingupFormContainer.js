import React from "react";
import SingupForm from "./SingupForm";
import { connect } from "react-redux";
import { singup} from "../store/actions/user";

class SingupFormContainer extends React.Component {
  state = { email: "", password: "", username:"" };
  onSubmit = event => {
    event.preventDefault();
    this.props.singup(this.state.email, this.state.password, this.state.username);
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
       
         <SingupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
      </div>
     
    );
  }
}
export default connect(null, { singup })(SingupFormContainer);
