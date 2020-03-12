import React from "react";
import { getImages } from "../store/actions/images";
import { connect } from "react-redux";
import List from "./List.js";
import Forms from "./Forms";
import "./ListContainer.css";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    if (!this.props.images.length) {
      return <p>Loading...</p>;
    }
    const displayImages = <List images={this.props.images} />;
    const forms = <Forms userLoggedIn={this.props.userLoggedIn} />;

    return (
      <div>
        <div>{forms}</div>
        <div>{displayImages}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { images: state.images.all, userLoggedIn: state.user };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
