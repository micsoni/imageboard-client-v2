import React, { Component } from "react";
import { getUsers } from "../store/actions/users";
import { connect } from "react-redux";
import AllUsers from "./AllUsers";

class AllUsersPage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const displayUsers = <AllUsers usersNames={this.props.users} />;
    if (!this.props.users.length) {
      return <p>Loading...</p>;
    }

    return <div>{displayUsers} </div>;
  }
}
function mapStateToProps(state) {
  return { users: state.users.all };
}
const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(AllUsersPage);
