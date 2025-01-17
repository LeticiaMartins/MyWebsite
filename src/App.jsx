import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-neutral-200
    selection:text-red-800"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[linear-gradient(-20deg,#e9defa_0%,#fbfcdb_100%)]"></div>  */}

        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[linear-gradient(to_top,#f3e7e9_0%,#e3eeff_99%,#e3eeff_100%)]"></div>
      </div>

      <div className="scontainer mx-auto px-8 md:px-16 lg:px-24">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Academics />
      </div>
      <Footer />
    </div>
  );
};

export default App;
