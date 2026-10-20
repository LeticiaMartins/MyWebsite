import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Community from "./components/Community";
import Academics from "./components/Academics";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-clip font-body text-ink antialiased selection:bg-accent/30 selection:text-ink">
      <div className="fundo" aria-hidden="true" />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Community />
        <Technologies />
        <Academics />
      </main>
      <Footer />
    </div>
  );
};

export default App;
