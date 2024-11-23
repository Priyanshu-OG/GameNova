import About from "./About";
import Hero from "./Hero";
import NavBar from "./Navbar";
import Features from "./Feautures";
import Story from "./Story";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
