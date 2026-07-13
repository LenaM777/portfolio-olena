import React from "react";
import Icon from "@/components/Icons/Icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__cta">
            <p>Come with me now:</p>
            <a href="mailto:olena.codes@proton.me" className="footer__link">
              olena.codes@proton.me
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://github.com/LenaM777"
              target="_blank"
              rel="noreferrer"
              className="footer__link btn-touch-target"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Icon name="github" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__link btn-touch-target"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <Icon name="linkedin" />
            </a>
          </div>
        </div>
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} | Designed & Engineered by Olena M.
          Powered by React. Inspired by Mono Sans typeface. Focused on Web
          Accessibility. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
