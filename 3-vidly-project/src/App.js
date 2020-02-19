import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieInfo from "./components/movieInfo";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/movie/:id" component={MovieInfo} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
