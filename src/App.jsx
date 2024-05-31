import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Expirience from "./components/Expirience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
export default function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Expirience />
      <Projects />      
      <Contact />
      {/* footer */}
    </>
  );
}
