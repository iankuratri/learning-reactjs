import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer />
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
