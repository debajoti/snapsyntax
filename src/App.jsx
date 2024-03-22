import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Experience />
        <Footer/>
      </div>
    </>
  );
}

export default App;
