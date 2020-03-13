import React, { Component } from "react";

export default class ImageCard extends Component {
  render() {
    const now = new Date();
    const updated = new Date(this.props.image.updatedAt);
    const hours = Math.abs(now - updated) / 36e5;

    return (
      <div className="col-lg-4 col-md-6 col-12" key={this.props.image.id}>
        <h3 className="text-center">{this.props.image.title}</h3>
        <img src={this.props.image.url} alt="" className="mr-3" />
        <p>{Math.round(hours)} hours ago</p>
      </div>
    );
  }
}
