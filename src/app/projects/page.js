import Project from "../../components/project";

export const metadata = {
  title: "Projects",
  description: "Explore live websites, ERPNext implementation work, and development in progress by Rizwan Shahani.",
};

export default function ProjectsPage() {
  return (
    <main className="inner-page projects-page">
      <header className="page-intro">
        <p className="eyebrow">Selected work · Frontend and implementation</p>
        <h1>
          Work made
          <em> with intention.</em>
        </h1>
        <p>
          A selection of live websites, practical ERPNext/Frappe experience, and
          learning work. Each project is labeled clearly so its status and scope
          are easy to understand. Live captures are used when available; other
          cards have labeled, project-specific previews.
        </p>
      </header>
      <Project showMoreLink={false} showHeading={false} />
    </main>
  );
}
