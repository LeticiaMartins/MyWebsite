import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects2 from "./components/Projects2";
import Contact from "./components/Contact";
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
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)]"></div> */}

        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[linear-gradient(135deg,#fdfcfb_0%,#e2d1c3_100%)]"></div>
      </div>

      <div className="scontainer mx-auto px-8 md:px-16 lg:px-24">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects2 />
        <Academics />
      </div>
        <Footer />
    </div>
  );
};

export default App;
