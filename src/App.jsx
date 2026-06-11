import React from "react";
import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BackstagePass from "./components/BackstagePass/BackstagePass";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <BackstagePass />
      <ScrollToTop />
    </>
  );
};

export default App;
