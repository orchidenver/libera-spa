import { Helmet } from "react-helmet";
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
import OurCapabilities from "./components/OurCapabilities";
import Token from "./components/Token";

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Libera Global AI</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Helmet>
        <meta
          name="description"
          content="Building the future of small retail with the power of data"
        />
        <title>Libera Global AI - Homepage</title>
        <meta
          name="keywords"
          content="libera, ai, retail, technology, Indonesia, supply, logistics"
        ></meta>
      </Helmet>
      <NavProvider>
        <Navigation />
        <Hero />
        <AboutApp />
        <OurOperations />
        <Token />
        <OurCapabilities />
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
