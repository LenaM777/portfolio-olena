import "./ProjectCard.scss";

const ProjectCard = ({ data, onCardClick, isInsideModal = false }) => {
  const { title, description, image, stack, demo, link } = data;

  return (
    <article
      className="project-card"
      onClick={!isInsideModal ? onCardClick : undefined}
      role={!isInsideModal ? "button" : undefined}
      tabIndex={!isInsideModal ? 0 : undefined}
      onKeyDown={(e) => !isInsideModal && e.key === "Enter" && onCardClick()}
      aria-label={
        !isInsideModal ? `View details of ${title} project` : undefined
      }
    >
      <div className="project-card__image">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          loading="lazy"
        />
      </div>

      <div className="project-card__content">
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__description">{description}</p>

        {stack && (
          <ul className="project-card__stack" aria-label="Technologies used">
            {stack.map((tech, index) => (
              <li key={index} className="project-card__stack-item">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card__links">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn-link"
              aria-label={`View live demo of ${title}`}
            >
              Demo
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn-link"
              aria-label={`View source code of ${title} on GitHub`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
