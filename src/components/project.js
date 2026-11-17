import Link from "next/link";

function Project({ showMoreLink = true, showHeading = true }) {
  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      category: "Personal · Web design",
      image: "/port.webp",
      alt: "Portfolio website concept displayed on a laptop",
    },
    {
      number: "02",
      title: "Task Management App",
      category: "Productivity · UI concept",
      image: "/todo.webp",
      alt: "Task management app interface concept",
    },
    {
      number: "03",
      title: "E-commerce Store",
      category: "Commerce · Web experience",
      image: "/com.webp",
      alt: "E-commerce website concept displayed on a desktop",
    },
  ];

  return (
    <section className="content-section projects-section" id="project">
      {showHeading && (
        <div className="section-heading">
          <p className="eyebrow">03 — Selected concepts</p>
          <div>
            <h2>Made to be <em>remembered.</em></h2>
            <p className="section-intro">
              A few directions I love exploring, from useful tools to polished
              digital storefronts.
            </p>
          </div>
        </div>
      )}
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <img src={project.image} alt={project.alt} />
              <span className="project-number">{project.number}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="project-details">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
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
