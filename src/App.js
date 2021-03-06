import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import PageFooter from "./components/PageFooter/PageFooter";

function App() {
  return (
    <Router>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <PageFooter />
    </Router>
  );
}

export default App;
