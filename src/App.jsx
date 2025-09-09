import Cover from "./components/Cover";
import "./App.css";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NewCover from "./components/NewCover";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <NewCover />

      <Statistics />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
