import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
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
        </Routes>
      </section>
    </main>
  );
}

export default App;
