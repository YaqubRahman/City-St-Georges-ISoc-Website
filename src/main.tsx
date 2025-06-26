import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Committee from "./pages/Committee.tsx";
import About from "./pages/About.tsx";
import Events from "./pages/Events.tsx";
import Feedback from "./pages/Feedback.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/Feedback" element={<Feedback />} />
    </Routes>
  </Router>
);
