import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section
      id="projects"
      className="projects-section section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <h2 className="section__title" id="projects-title">
          Projects
        </h2>
        <div className="projects-section__grid" role="list">
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
