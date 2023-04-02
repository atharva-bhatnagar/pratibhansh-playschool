import "./App.css";

import CompulHeader from "./components/Pages/CompulHeader";
import Home from "./components/Pages/Home";
import GalleryPage from "./components/Pages/GalleryPage";
import AnnouncementPage from "./components/Pages/AnnouncementPage";
import AcademicsPage from "./components/Pages/AcademicsPage";
import ActivitiesPage from "./components/Pages/ActivitiesPage";
import FeeStructurePage from "./components/Pages/FeeStucturePage";
import CompulFooter from "./components/Pages/CompulFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <CompulHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Academics" element={<AcademicsPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Announcement" element={<AnnouncementPage />} />
          <Route path="/Activities" element={<ActivitiesPage />} />
          <Route path="/FeeStructure" element={<FeeStructurePage />} />
        </Routes>
        <CompulFooter />
      </Router>
    </div>
  );
}

export default App;
