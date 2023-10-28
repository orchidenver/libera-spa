import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
