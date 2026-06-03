import React from "react";
import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BackstagePass from "./components/BackstagePass/BackstagePass";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <BackstagePass />
      <ScrollToTop />
    </>
  );
};

export default App;
