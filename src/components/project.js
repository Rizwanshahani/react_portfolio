import Link from "next/link";
import projects from "../data/projects";

function Project({ showMoreLink = true, showHeading = true }) {
  const displayedProjects = showMoreLink ? projects.slice(0, 3) : projects;

  return (
    <section className="content-section projects-section" id="project">
      {showHeading && (
        <div className="section-heading">
          <p className="eyebrow">03 — Project highlights</p>
          <div>
            <h2>Made to be <em>remembered.</em></h2>
            <p className="section-intro">
              A selection of live websites and practical implementation work,
              built around clear information and useful visitor journeys.
            </p>
          </div>
        </div>
      )}
      <div className="project-grid">
        {displayedProjects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              {project.href ? (
                <a
                  className="project-image-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.status}: ${project.title}`}
                >
                  <img src={project.image} alt={project.alt} />
                </a>
              ) : (
                <img src={project.image} alt={project.alt} />
              )}
              <span className="project-number">{project.number}</span>
              {project.href && <span className="project-arrow" aria-hidden="true">↗</span>}
            </div>
            <div className="project-details">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <p className="project-description">{project.description}</p>
                {project.href ? (
                  <a
                    className="project-live-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.status} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="project-status">{project.status}</span>
                )}
              </div>
              <span className="project-index">{project.number}</span>
            </div>
          </article>
        ))}
      </div>
      {showMoreLink && (
        <div className="projects-more">
          <Link className="button button-quiet" href="/projects">
            View all projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Project;
