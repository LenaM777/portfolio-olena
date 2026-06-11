import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <span className="footer__copy">
            © {new Date().getFullYear()} | Built with React & SCSS
          </span>

          <div className="footer__links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="footer__link">
              Email
            </a>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
