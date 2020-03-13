import React from "react";
import { connect } from "react-redux";
import { createImage } from "../store/actions/images";
import ImageForm from "./ImageForm";
import { getUser } from "../store/actions/user";

class CreateImageFormContainer extends React.Component {
  state = {
    title: "",
    url: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.createImage(this.state).then(() => this.props.getUser());
    this.setState({
      title: "",
      url: ""
    });
  };
  render() {
    return (
      <div>
        <p>Save your favorite images</p>
        <ImageForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}
export default connect(null, { createImage, getUser })(
  CreateImageFormContainer
);
