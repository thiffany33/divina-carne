import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Animals from "./sections/Animals";
import About from "./sections/About";
import Sig from "./sections/Sig";
import Footer from "./sections/Footer";
import Mvv from "./sections/Mvv";
import Contact from "./sections/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Mvv />
      <Animals />
      <Sig />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
