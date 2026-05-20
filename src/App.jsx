import React from "react";
import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
};

export default App;
