import React, { Component } from "react";
import { getUsers } from "../store/actions/allUsers";
import { connect } from "react-redux";
import AllUsers from "./AllUsers";

class AllUsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const displayUsers = <AllUsers AllUsersNames={this.props.allUsers} />;
    if (!this.props.allUsers.length) {
      return <p>Loading...</p>;
    }

    return <div>{displayUsers} </div>;
  }
}
function mapStateToProps(state) {
  return { allUsers: state.allUsers.all };
}
const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);
