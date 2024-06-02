import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Expirience from "./components/Expirience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Expirience />
      <Projects />      
      <Contact />
      <Footer />
    </>
  );
}
