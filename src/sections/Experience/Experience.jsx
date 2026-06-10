import React from "react";
import Icon from "../../components/Icons/Icons";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <h3 className="experience-section__title">
          Frontend / Layout Developer (Part-time)
        </h3>
        <p className="experience-section__description">
          Remote | 2023 – 2026 (2+ years of experience)
        </p>
        <ul className="experience-section__bullets">
          <li className="experience-section__bullet">
            <Icon name="cool" className="experience-section__bullet-icon" />
            <span>
              Developed numerous responsive, pixel-perfect landing pages from
              Figma layouts, ensuring strict compliance with design specs and
              technical requirements.
            </span>
          </li>
          <li className="experience-section__bullet">
            <Icon name="cool" className="experience-section__bullet-icon" />
            <span>
              Built clean, semantic HTML5 markup with a strong focus on Web
              Accessibility (a11y) and SEO best practices to maximize search
              engine visibility.
            </span>
          </li>
          <li className="experience-section__bullet">
            <Icon name="cool" className="experience-section__bullet-icon" />
            <span>
              Authored maintainable and scalable stylesheets using modern
              CSS/SCSS (utilizing BEM methodology), ensuring flawless
              cross-browser compatibility and consistent UI rendering.
            </span>
          </li>
          <li className="experience-section__bullet">
            <Icon name="cool" className="experience-section__bullet-icon" />
            <span>
              Implemented responsive web design (RWD) using a mobile-first
              approach, flexible grids, and media queries to deliver a seamless
              user experience across mobile, tablet, and desktop screens.
            </span>
          </li>
          <li className="experience-section__bullet">
            <Icon name="cool" className="experience-section__bullet-icon" />
            <span>
              Optimized web performance and assets (image compression, SVG
              integration, font loading) focusing on
              <strong>Core Web Vitals</strong> (LCP, CLS) through
              <strong>Lighthouse</strong> diagnostics to ensure fast loading
              speeds and visual stability.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
