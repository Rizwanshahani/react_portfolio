import Link from "next/link";
import projects from "../data/projects";
import ProjectDestination from "./project-destination";

function ProjectLink({ project, className, ariaLabel, children }) {
  const href = project.href || project.contactHref;

  if (!href) return children;

  return (
    <ProjectDestination
      href={href}
      className={className}
      ariaLabel={ariaLabel}
      external={Boolean(project.href)}
      restricted={Boolean(project.restricted)}
    >
      {children}
    </ProjectDestination>
  );
}

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
        {displayedProjects.map((project) => {
          const hasDestination = Boolean(project.href || project.contactHref);

          return (
            <article className="project-card" key={project.number}>
              <div
                className={`project-image${project.preview ? " project-image-preview" : ""}`}
              >
                <ProjectLink
                  project={project}
                  className="project-image-link"
                  ariaLabel={`${project.actionLabel || project.status}: ${project.title}`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.alt} />
                  ) : (
                    <ProjectPreview preview={project.preview} />
                  )}
                </ProjectLink>
                <span className="project-number">{project.number}</span>
                {hasDestination && (
                  <span className="project-arrow" aria-hidden="true">↗</span>
                )}
              </div>
              <div className="project-details">
                <div>
                  <h3>
                    <ProjectLink
                      project={project}
                      className="project-title-link"
                      ariaLabel={`${project.actionLabel || project.status}: ${project.title}`}
                    >
                      {project.title}
                    </ProjectLink>
                  </h3>
                  <p>{project.category}</p>
                  <p className="project-description">{project.description}</p>
                  {hasDestination ? (
                    <ProjectLink
                      project={project}
                      className="project-live-link"
                      ariaLabel={`${project.actionLabel || project.status}: ${project.title}`}
                    >
                      {project.actionLabel || project.status}{" "}
                      <span aria-hidden="true">↗</span>
                    </ProjectLink>
                  ) : (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>
                <span className="project-index">{project.number}</span>
              </div>
            </article>
          );
        })}
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
