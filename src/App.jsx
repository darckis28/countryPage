import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <Hero />
      <MainSection />
    </Context>
  );
}

export default App;
