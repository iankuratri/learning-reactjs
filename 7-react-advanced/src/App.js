import React, { Component } from "react";
import "./App.css";
// import Movie from "./hoc/Movie";
// import Counter from "./hooks/counter";
// import Users from "./hooks/users";
import MoviesPage from "./context/MoviesPage";
import UserContext from "./context/userContext";

class App extends Component {
  state = { currentUser: { name: "Ankur" } };

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviesPage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
