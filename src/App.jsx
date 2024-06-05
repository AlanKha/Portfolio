import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Expirience from "./components/Expirience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SlidingText from "./components/SlidingText/SlidingText";
export default function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <SlidingText />
      <Expirience />
      <Projects />      
      <Contact />
      <Footer />
    </>
  );
}
