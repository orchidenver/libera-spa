import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurTeam from "./components/OurTeam";
import OurInvestors from "./components/OurInvestors";
import NavProvider from "./context/NavContext";
import AboutApp from "./components/AboutApp";
import OurOperations from "./components/OurOperations";

function App() {
  return (
    <div className="app">
      <NavProvider>
        <Navigation />
        <Hero />
        <AboutApp />
        <OurOperations />
        <OurTeam />
        <OurInvestors />
      </NavProvider>
    </div>
  );
}

export default App;
