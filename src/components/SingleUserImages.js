import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import { getUser } from "../store/actions/user";

class SingleUserImages extends Component {
  componentDidMount() {
    this.props.getUser(Number(this.props.match.params.userId));
  
  }

  render() {
    if (!this.props.userImages) {
      return <p>Loading...</p>;
    }
    const displayImages = <List images={this.props.userImages} />;
    return (
      <div>
        <p>{this.props.userName}</p>
        {displayImages}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { userImages: state.allUsers.uniqueUser.images,
    userName: state.allUsers.uniqueUser.username};
}
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserImages);
