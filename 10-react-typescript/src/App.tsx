import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="loading" />
      <Greet name="Ankur" isLoggedIn={false} />

      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
