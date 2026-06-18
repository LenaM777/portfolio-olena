import { useState, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";
import Icon from "../Icons/Icons";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./NavLinks.scss";

const NAV_LINKS = [
  { id: "about", label: "About", path: "#about" },
  { id: "experience", label: "Experience", path: "#experience" },
  { id: "skills", label: "Skills", path: "#skills" },
  { id: "projects", label: "Projects", path: "#projects" },
  { id: "contacts", label: "Contacts", path: "#contacts" },
];

export default function NavLinks({ className, onClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projectsRef = useRef(null);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    if (onClick) onClick();
  };

  useClickOutside(
    projectsRef,
    () => {
      setIsDropdownOpen(false);
    },
    isDropdownOpen
  );

  return (
    <ul className="header__nav-list nav-menu" role="list">
      {NAV_LINKS.map((link) => (
        <li
          key={link.id}
          role="listitem"
          className="nav-menu__item"
          ref={link.id === "projects" ? projectsRef : null}
        >
          <div className="nav-menu__row">
            <HashLink
              smooth
              to={link.path}
              className={className}
              onClick={handleLinkClick}
            >
              {link.label}
            </HashLink>

            {link.id === "projects" && (
              <button
                type="button"
                className={`nav-menu__toggle btn-touch-target ${
                  isDropdownOpen ? "is-open" : ""
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="Toggle projects menu"
              >
                <Icon name="play3" />
              </button>
            )}
          </div>
          {link.id === "projects" && (
            <ProjectDropdown
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              onLinkClick={onClick}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
