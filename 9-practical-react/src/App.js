import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Icons } from "./components/Icons";
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
          <Route path="/icons" element={<Icons />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
