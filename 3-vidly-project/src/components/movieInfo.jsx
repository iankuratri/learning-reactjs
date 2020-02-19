import React, { Component } from "react";

class MovieInfo extends Component {
  handleSave = () => {
    this.props.history.replace("/movies");
  };

  state = {};
  render() {
    return (
      <div>
        <h1>Movie From {this.props.match.params.id}</h1>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieInfo;
