import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllUsers extends Component {
  render() {
    const displayUsers = this.props.usersNames.map(user => {
      return (        
          <Link key={user.id} to={`user/${user.id}`}>
          <button type="button" className="list-group-item list-group-item-action">{user.username}</button>
          </Link>
      
      );
    });

    return (<div className="list-group">
    <button type="button" className="list-group-item list-group-item-dark">
      Check other users imaeboards
    </button>
    {displayUsers}
    </div>)
  }
}