import { useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import projectsData from "@/data/projects.json";
import "./Projects.scss";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="projects-section section"
        aria-labelledby="projects-title"
      >
        <div className="container">
          <h2
            className="projects-section__title section__title"
            id="projects-title"
          >
            Projects
          </h2>
          <div className="projects-section__grid" role="list">
            {projectsData.map((project) => (
              <button
                key={project.id}
                className="project-section__card-button"
                onClick={() => handleProjectClick(project)}
                aria-label={`View details for ${project.title} project`}
                type="button"
              >
                <ProjectCard data={project} />
              </button>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
