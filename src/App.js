// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import StanderProject from "./pages/projects/StanderProject";
import TrackingSolar from "./pages/projects/TrackingSolar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/StanderProject" element={<StanderProject />} />
        <Route path="/projects/TrackingSolar" element={<TrackingSolar />} />
        {/* Add more project detail pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
