import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Counter } from "./components/state/Counter";
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
    <div>
      {/* 
      <PersonList names={personList} />
      <Status status="loading" />
      <Greet name="Ankur" isLoggedIn={false} />

      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar> 

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />

      <br />

      <Input
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      */}

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
