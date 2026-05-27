import { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Icon from "../../components/Icons/Icons";
import "./ProjectModal.scss";

const ProjectModal = ({ isOpen, project, onClose }) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (!isOpen || !project) return;

    previousActiveElement.current = document.activeElement;
    document.body.style.overflow = "hidden";

    if (modalRef.current) {
      modalRef.current.focus();
    }

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";

      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="project-modal"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div className="project-modal__content" ref={modalRef} tabIndex={-1}>
        <button
          className="project-modal__btn-close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <Icon name="close" />
        </button>

        <div className="project-modal__card-wrapper">
          <div id={`modal-title-${project.id}`} className="sr-only">
            {project.title} project details
          </div>
          <ProjectCard data={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
