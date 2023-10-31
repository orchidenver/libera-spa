import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurTeam from "./components/OurTeam";
import OurInvestors from "./components/OurInvestors";
import NavProvider from "./context/NavContext";
import AboutApp from "./components/AboutApp";
import OurMission from "./components/OurMission";
import Contacts from "./components/Contacts";
import OurOperations from "./components/OurOperations";

function App() {
  return (
    <div className="app">
      <NavProvider>
        <Navigation />
        <Hero />
        <AboutApp />
        <OurOperations />
        <OurMission />
        <OurTeam />
        <OurInvestors />
        <Contacts />
      </NavProvider>
    </div>
  );
}

export default App;
