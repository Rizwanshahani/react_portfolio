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
          <img src="/my.jpg" alt="Rizwan Shahani" />
          <div className="portrait-caption">
            <span className="caption-index">01 / 05</span>
            <span>Crafting with intention</span>
          </div>
        </div>
        <span className="portrait-orbit orbit-one" aria-hidden="true" />
        <span className="portrait-orbit orbit-two" aria-hidden="true" />
        <span className="portrait-note">PORTFOLIO&nbsp; — &nbsp;2026</span>
      </div>
    </section>
  );
}

export default Home;
