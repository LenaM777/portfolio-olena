import { useProjects } from "../../hooks/useProjects";

export default function ProjectDropdown({ isOpen, onClose, onLinkClick }) {
  const projects = useProjects();

  const handleProjectClick = () => {
    onClose();
    if (onLinkClick) onLinkClick();
  };

  if (!isOpen || projects.length === 0) return null;

  return (
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
  );
}
