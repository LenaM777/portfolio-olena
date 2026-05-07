import { HashLink } from "react-router-hash-link";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";

const NAV_LINKS = [
  { id: "about", label: "About", path: "#about" },
  { id: "experience", label: "Experience", path: "#experience" },
  { id: "skills", label: "Skills", path: "#skills" },
  { id: "projects", label: "Projects", path: "#projects" },
  { id: "contacts", label: "Contacts", path: "#contacts" },
];

export default function NavLinks({ className, onClick }) {
  return (
    <ul className="header__nav-list" role="list">
      {NAV_LINKS.map((link) => (
        <li key={link.id} role="listitem">
          <HashLink
            smooth
            to={link.path}
            className={className}
            onClick={onClick}
          >
            {link.label}
          </HashLink>
          {link.id === "projects" && <ProjectDropdown onLinkClick={onClick} />}
        </li>
      ))}
    </ul>
  );
}
