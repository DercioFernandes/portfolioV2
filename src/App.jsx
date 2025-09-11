import "./App.css";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { useWindowWidth } from "./hooks/useWindowWidth";
import CoverDecider from "./components/CoverDecider";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const width = useWindowWidth();
  if (width === null) return null;
  const isMobile = width <= 768;
  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      {isMobile ? "" : <SideBar />}
      <CoverDecider />
      <Statistics />
      <About />
      <Education />
      <Experience />
      <Hobbies />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
