import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </Router>
  );
}

export default App;
