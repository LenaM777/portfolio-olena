import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import NavLinks from "../../components/NavLinks/NavLinks";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import Icon from "../../components/Icons/Icons";
import "./Header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header" id="top">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <HashLink smooth to="#top" aria-label="Logo - Home page">
              <Icon name="github" />
              <span>LENA</span>
            </HashLink>
          </div>

          <nav className="header__nav" aria-label="Main navigation">
            <NavLinks className="nav-link" />
          </nav>

          <div className="header__actions">
            <ThemeToggler />

            <button
              className="header__burger btn-touch-target"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
