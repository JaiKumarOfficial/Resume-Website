import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import { project_data } from "./data/project_data";
import LoadingSite from "./components/LoadingSite";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <>
      {isLoading ? (
        <LoadingSite />
      ) : (
        <div className="main">
          <Particles
            params={{
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                },
              },
            }}
          />
          <Navbar />
          <Header />
          <About />
          <Timeline />
          <Skills />
          <Projects data={project_data} />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
