import Details from "./components/Details";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="overflow-hidden font-poppins">
        <Hero />
        <Details />
        <Experience />
        <Footer/>
      </div>
    </>
  );
}

export default App;
