import React, { Component } from "react";
import "./App.css";
import Login from "./context/Login";
// import Movie from "./hoc/Movie";
// import Counter from "./hooks/counter";
// import Users from "./hooks/users";
import MoviesPage from "./context/MoviesPage";
import UserContext from "./context/userContext";

class App extends Component {
  state = { currentUser: null };

  handleLoggedIn = (name) => {
    const user = { name };
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviesPage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
