import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <section className="skills-section section" id="skills">
        <div className="container">
          <h2 className="section__title">Key Skills (Tech Stack)</h2>
          <ul className="skills-section__list">
            <li className="skills-section__item">
              <strong>Programming:</strong> JavaScript (ES6+).
            </li>
            <li className="skills-section__item">
              <strong>Frameworks & Libraries:</strong> React, Bootstrap.
            </li>
            <li className="skills-section__item">
              <strong>Core Tech Stack:</strong> HTML5, CSS (Flexbox, Grid),
              Cross-Browser, Responsive Design.
            </li>
            <li className="skills-section__item">
              <strong>Development Tools:</strong> Git/GitHub, Vite, REST API
              Integration, UI/UX (Figma), Web Accessibility (a11y).
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
