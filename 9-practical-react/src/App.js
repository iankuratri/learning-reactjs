import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { CountUp } from "./components/CountUp";
import { Home } from "./components/Home";
import { Icons } from "./components/Icons";
import { ModalComponent } from "./components/Modal";
import { Navigation } from "./components/Navigation";
import { ToastNotifications } from "./components/ToastNotifications";
import { Tooltip } from "./components/Tooltip";

function App() {
  return (
    <main>
      <aside>
        <Navigation />
      </aside>

      <section>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/toast-notifications" element={<ToastNotifications />} />
          <Route path="/modal" element={<ModalComponent />} />
          <Route path="/tooltip" element={<Tooltip />} />
          <Route path="/countup" element={<CountUp />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
