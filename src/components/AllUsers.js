import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllUsers extends Component {
  render() {
    const displayUsers = this.props.AllUsersNames.map(user => {
      return (
        <div className="col-lg-4 col-md-6 col-12" key={user.id}>
          <Link to={`user/${user.id}`}>
            <h3 className="text-center">{user.username}</h3>
          </Link>
        </div>
      );
    });

    return <div className="row">{displayUsers}</div>;
  }
}
