import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurInvestors from "./components/OurInvestors/OurInvestors";
import OurTeam from "./components/OurTeam/OurTeam";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <div className="app">
      <NavProvider>
        <Navigation />
        <Hero />
        <OurTeam />
        <OurInvestors />
      </NavProvider>
    </div>
  );
}

export default App;
