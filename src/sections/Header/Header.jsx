import { useState } from "react";
import NavLinks from "@/components/NavLinks/NavLinks";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import Logo from "@/components/Logo/Logo";
import Icon from "@/components/Icons/Icons";
import "./Header.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header" id="top">
      <div className="container">
        <div className="header__container">
          <Logo />
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
