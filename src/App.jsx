import Details from "./components/Details";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Details />
        <Experience />
      </div>
    </>
  );
}

export default App;
