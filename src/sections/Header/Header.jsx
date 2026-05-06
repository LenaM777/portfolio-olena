import { HashLink } from "react-router-hash-link";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import "./Header.scss";

const NAV_LINKS = [
  { id: "about", label: "About", path: "#about" },
  { id: "experience", label: "Experience", path: "#experience" },
  { id: "skills", label: "Skills", path: "#skills" },
  { id: "projects", label: "Projects", path: "#projects" },
  { id: "contacts", label: "Contacts", path: "#contacts" },
];

export default function Header() {
  const renderLinks = (className) => (
    <ul className="header__nav-list" role="list">
      {NAV_LINKS.map((link) => (
        <li key={link.id} role="listitem">
          <HashLink smooth to={link.path} className={className}>
            {link.label}
          </HashLink>
        </li>
      ))}
    </ul>
  );

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
            {renderLinks("nav-link")}
          </nav>

          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
