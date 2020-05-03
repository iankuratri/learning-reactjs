import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MoviesList extends Component {
  // access user context outside of render as part of creating the class
  static contextType = UserContext;

  componentDidMount() {
    console.log("context:", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(currentUser) => (
          <div>
            Movies List for {currentUser.name}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// access user context outside of render after creating the class
// MoviesList.contextType = UserContext;

export default MoviesList;
