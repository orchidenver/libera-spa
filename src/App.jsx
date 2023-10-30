import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurTeam from "./components/OurTeam";
import OurInvestors from "./components/OurInvestors";
import NavProvider from "./context/NavContext";
import AboutApp from "./components/AboutApp";

function App() {
  return (
    <div className="app">
      <NavProvider>
        <Navigation />
        <Hero />
        <AboutApp />
        <OurTeam />
        <OurInvestors />
      </NavProvider>
    </div>
  );
}

export default App;
