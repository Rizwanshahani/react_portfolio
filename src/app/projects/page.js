import Project from "../../components/project";

export const metadata = {
  title: "Projects",
  description: "Explore web design and application concepts by Rizwan Shahani.",
};

export default function ProjectsPage() {
  return (
    <main className="inner-page projects-page">
      <header className="page-intro">
        <p className="eyebrow">Selected concepts · 2026</p>
        <h1>
          Ideas made
          <em> tangible.</em>
        </h1>
        <p>
          A few of the directions I enjoy exploring: thoughtful personal
          websites, useful product experiences, and polished digital stores.
        </p>
      </header>
      <Project showMoreLink={false} showHeading={false} />
    </main>
  );
}
