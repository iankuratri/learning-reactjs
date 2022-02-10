import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const personList = [
    {
      first: "Elon",
      last: "Atri",
    },
    {
      first: "Bill",
      last: "Yadav",
    },
    {
      first: "Aditya",
      last: "Birla",
    },
  ];

  return (
    <div className="App">
      <Greet name="Ankur" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
