import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { MuiButton } from "./components/MuiButton";
import { MuiInput } from "./components/MuiInput";
import { MuiTypography } from "./components/MuiTypography";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <main>
      <aside>
        <Navigation />
      </aside>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typography" element={<MuiTypography />} />
          <Route path="/button" element={<MuiButton />} />
          <Route path="/input" element={<MuiInput />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
