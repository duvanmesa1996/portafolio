import NavBar from "./components/NavBar";
import About from "./components/About";
import Trabajos from "./components/Trabajos";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from './components/Footer'
import Menu from "./components/Menu";
import Ta from "./components/Ta";

function App() {
  return (
    <div className=" ">
      <NavBar />
      <Menu />
      <Hero />
      <About />
      <Trabajos />      
      <Experience />
      <Contact />
      <Footer />
      <Ta />
    </div>

  
  );
};

export default App;
