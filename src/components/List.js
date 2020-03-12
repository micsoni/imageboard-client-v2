import React, { Component } from "react";

export default class List extends Component {
  render() {
    const displayImages = this.props.images.map(image => {
      return (
        <div className="col-lg-4 col-md-6 col-12" key={image.id} >
          <h3 className="text-center">{image.title}</h3>
          <img src={image.url} alt="" className="mr-3" />
        </div>
      );
    });

    return <div className="row">{displayImages}</div>;
  }
}
