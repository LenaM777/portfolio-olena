import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const testData = {
  title: "Garry Potter",
  description:
    "Lorem150 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
  image: "./images/garry.jpg",
  stack: ["HTML", "SCSS"],
  demo: "#",
  link: "#",
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h1> Projects </h1>
        <p>Card</p>
        <ProjectCard data={testData} />
      </div>
    </section>
  );
};

export default Projects;
