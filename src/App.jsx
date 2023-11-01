import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurTeam from "./components/OurTeam";
import OurInvestors from "./components/OurInvestors";
import NavProvider from "./context/NavContext";
import AboutApp from "./components/AboutApp";
import OurMission from "./components/OurMission";
import Contacts from "./components/Contacts";
import OurOperations from "./components/OurOperations";
import Footer from "./components/Footer";
import OurFlow from "./components/OurFlow";

function App() {
  return (
    <div className="app">
      <NavProvider>
        <Navigation />
        <Hero />
        <OurFlow />
        <AboutApp />
        <OurOperations />
        <OurMission />
        <OurTeam />
        <OurInvestors />
        <Contacts />
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
