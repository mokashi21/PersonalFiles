import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Tech,
  Navbar,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
