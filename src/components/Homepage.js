import React from "react";
import { getImages } from "../store/actions/images";
import { connect } from "react-redux";
import ImageCard from "./ImageCard.js";
import "./Homepage.css";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    if (!this.props.images.length) {
      return <p>Loading...</p>;
    }
    const displayImages = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return <div>{displayImages}</div>;
  }
}
function mapStateToProps(state) {
  return { images: state.images.all };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
