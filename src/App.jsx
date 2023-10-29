import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  useEffect(() => {
    function onHandleScroll() {
      if (window.screenY === 0) setSelectedPage("home");
    }
    window.addEventListener("scroll", onHandleScroll);

    return () => window.removeEventListener("scroll", onHandleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero />
      <OurTeam />
    </div>
  );
}

export default App;
