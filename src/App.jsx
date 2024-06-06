import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Expirience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SlidingText from "./components/SlidingText";

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
