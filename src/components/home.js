import Link from "next/link";

function Home() {
  return (
    <section className="container-home" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Independent developer <span className="eyebrow-divider">/</span> Pakistan
        </p>
        <h1>
          Thoughtful digital
          <span>experiences.</span>
        </h1>
        <p className="hero-intro">
          I&apos;m Rizwan Shahani, a junior frontend developer creating clear,
          responsive web experiences with React.js and thoughtful design.
        </p>
        <p className="hero-role">React.js <span>·</span> ERPNext / Frappe</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button button-quiet" href="/contact">
            Get in touch <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="portrait-frame">
          <img src="/rizwan-portrait.png" alt="Rizwan Shahani" />
        </div>
      </div>
    </section>
  );
}

export default Home;
