import { HashLink } from "react-router-hash-link";
import NavLinks from "../../components/NavLinks/NavLinks";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header" id="top">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <HashLink smooth to="#top" aria-label="Logo - Home page">
              <span>OLENA</span>
            </HashLink>
          </div>

          <nav className="header__nav" aria-label="Main navigation">
            <NavLinks className="nav-link" />
          </nav>

          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
