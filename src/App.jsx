import Cover from "./components/Cover";
import "./App.css";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NewCover from "./components/NewCover";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <NewCover />
      <Statistics />
      <About />
      <Education />
      <Experience />
      <Hobbies />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
