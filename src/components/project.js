import Link from "next/link";
import projects from "../data/projects";

function ProjectPreview({ preview }) {
  return (
    <div
      className={`project-preview project-preview-${preview.kind}`}
      role="img"
      aria-label={preview.alt}
    >
      <div className="project-preview-topbar">
        <span className="project-preview-brand">{preview.brand}</span>
        <span className="project-preview-label">{preview.label}</span>
      </div>
      <div className="project-preview-content">
        <div className="project-preview-copy">
          <p>{preview.eyebrow}</p>
          <h4>{preview.title}</h4>
          <span>{preview.description}</span>
        </div>
        <div className="project-preview-art" aria-hidden="true">
          {preview.items.map((item, index) => (
            <span className="project-preview-item" key={item}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              {item}
            </span>
          ))}
        </div>
      </div>
      <span className="project-preview-caption">{preview.caption}</span>
    </div>
  );
}

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
            <div className={`project-image${project.preview ? " project-image-preview" : ""}`}>
              {project.href ? (
                <a
                  className="project-image-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.actionLabel || project.status}: ${project.title}`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.alt} />
                  ) : (
                    <ProjectPreview preview={project.preview} />
                  )}
                </a>
              ) : project.image ? (
                <img src={project.image} alt={project.alt} />
              ) : (
                <ProjectPreview preview={project.preview} />
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
                    {project.actionLabel || project.status} <span aria-hidden="true">↗</span>
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
