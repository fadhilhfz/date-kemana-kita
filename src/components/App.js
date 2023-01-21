import LandingPage from "./LandingPage";
import MapPage from "./MapPage";
import "../css/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<MapPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
