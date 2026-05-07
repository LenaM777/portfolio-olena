import { useState, useEffect } from "react";
import { useProjects } from "../../hooks/useProjects";
import Icon from "../Icons/Icons";

export default function ProjectDropdown({ onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const projects = useProjects();

  const handleProjectClick = () => {
    setIsOpen(false);
    if (onLinkClick) onLinkClick();
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown__arrow-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Toggle projects menu"
      >
        <Icon name="play3" />
      </button>

      {isOpen && projects.length > 0 && (
        <ul
          className="dropdown__menu"
          role="list"
          aria-label="Project demonstrations"
        >
          {projects.map((project) => (
            <li key={project.id} role="listitem">
              <a
                href={project.demo}
                className="dropdown__item"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleProjectClick}
              >
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
