import React, { Component } from "react";
import { connect } from "react-redux";
import ImageCard from "./ImageCard";
import { getUser } from "../store/actions/user";

class SingleUserPage extends Component {
  componentDidMount() {
    this.props.getUser(Number(this.props.match.params.userId));
  }

  render() {

    if (!this.props.userImages) {
      return <p>Loading...</p>;
    }

    const displayImages = this.props.userImages.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return (
      <div>
        <p>{this.props.userName}</p>
       {displayImages}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userImages: state.users.uniqueUser.images,
    userName: state.users.uniqueUser.username
  };
}
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(SingleUserPage);
