import Link from "next/link";
import { FiCode, FiLayers, FiMessageCircle } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Understand the idea",
    description:
      "We start with your goals, audience, and the details that will make the experience useful.",
    icon: <FiMessageCircle aria-hidden="true" />,
  },
  {
    number: "02",
    title: "Shape the direction",
    description:
      "I turn the brief into a considered structure and visual direction before moving into the build.",
    icon: <FiLayers aria-hidden="true" />,
  },
  {
    number: "03",
    title: "Build and refine",
    description:
      "The experience comes together responsively, with careful testing and a final polish pass.",
    icon: <FiCode aria-hidden="true" />,
  },
];

function Process() {
  return (
    <section className="content-section process-section" id="process">
      <div className="section-heading">
        <p className="eyebrow">02 — How I work</p>
        <div>
          <h2>Clear steps. <em>Considered results.</em></h2>
          <p className="section-intro">
            A collaborative process keeps the important decisions clear and
            the details intentional.
          </p>
        </div>
      </div>
      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-card" key={step.number}>
            <div className="process-card-top">
              <span className="process-number">{step.number}</span>
              <span className="process-icon">{step.icon}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
      <Link className="text-link process-link" href="/contact">
        Have a project in mind? <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}

export default Process;
