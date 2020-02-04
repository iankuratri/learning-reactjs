import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        className={this.getLikeButtonClasses()}
        aria-hidden="true"
        onClick={this.props.onClick}
      ></i>
    );
  }

  getLikeButtonClasses() {
    let classes = "fa fa-heart";
    classes += this.props.isLiked ? "" : "-o";
    return classes;
  }
}

export default Like;
