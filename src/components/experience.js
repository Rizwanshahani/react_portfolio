function Experience() {
  return (
    <section className="content-section approach-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">01 — How I contribute</p>
        <div>
          <h2>Practical skills, <em>thoughtfully applied.</em></h2>
          <p className="section-intro">
            My experience spans responsive frontend work, live website
            projects, and hands-on ERPNext/Frappe implementation workflows.
          </p>
        </div>
      </div>
      <div className="approach-grid">
        <article className="approach-card">
          <span className="card-index">01</span>
          <div className="card-mark" aria-hidden="true">✳</div>
          <h3>Responsive frontend</h3>
          <p>
            React.js interfaces built with reusable components, clear
            structure, and layouts that adapt to different screens.
          </p>
          <span className="card-foot">REACT · JAVASCRIPT · CSS</span>
        </article>
        <article className="approach-card">
          <span className="card-index">02</span>
          <div className="card-mark" aria-hidden="true">◈</div>
          <h3>Useful web experiences</h3>
          <p>
            Live portfolio, consultancy, and storefront projects shaped around
            clear information and practical visitor journeys.
          </p>
          <span className="card-foot">PORTFOLIO · SERVICES · COMMERCE</span>
        </article>
        <article className="approach-card">
          <span className="card-index">03</span>
          <div className="card-mark" aria-hidden="true">⌘</div>
          <h3>ERPNext / Frappe workflows</h3>
          <p>
            Practical exposure to company setup, master-data imports,
            chart-of-accounts configuration, and troubleshooting. This work
            extends to Yovarin, my enterprise architecture company.
          </p>
          <span className="card-foot">SETUP · DATA · DOCUMENTATION</span>
        </article>
      </div>
    </section>
  );
}

export default Experience;
