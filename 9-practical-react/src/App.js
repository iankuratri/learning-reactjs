import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Icons } from "./components/Icons";
import { Navigation } from "./components/Navigation";
import { ToastNotifications } from "./components/ToastNotifications";

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
          <Route path="/toast-notifications" element={<ToastNotifications />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
