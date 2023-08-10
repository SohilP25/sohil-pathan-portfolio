// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
// import Service from "./components/Services";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Info from "./components/Info";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Info />
      <Timeline />
      <Skills />
      {/* <Service /> */}
      <Projects />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">SOHIL PATHAN</h6>
        <p>sohil pathan © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
