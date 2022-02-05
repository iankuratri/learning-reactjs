import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ColorPicker } from "./components/ColorPicker";
import { CountUpComponent } from "./components/CountUp";
import { Home } from "./components/Home";
import { Icons } from "./components/Icons";
import { IdleTimerComponent } from "./components/IdleTimer";
import { ModalComponent } from "./components/Modal";
import { Navigation } from "./components/Navigation";
import { ToastNotifications } from "./components/ToastNotifications";
import { Tooltip } from "./components/Tooltip";
import { CreditCards } from "./components/CreditCards";
import { DatePicker } from "./components/DatePicker";

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
          <Route path="/countup" element={<CountUpComponent />} />
          <Route path="/idle-timer" element={<IdleTimerComponent />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/date-picker" element={<DatePicker />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
