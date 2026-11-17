function Experience() {
  return (
    <section className="content-section approach-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">01 — What I do</p>
        <div>
          <h2>Good work starts with <em>good thinking.</em></h2>
          <p className="section-intro">
            I bring thoughtful design and dependable engineering together to
            create digital products that feel effortless to use.
          </p>
        </div>
      </div>
      <div className="approach-grid">
        <article className="approach-card">
          <span className="card-index">01</span>
          <div className="card-mark" aria-hidden="true">✳</div>
          <h3>Portfolio experiences</h3>
          <p>
            Responsive, personal websites built to tell a story and make a
            lasting first impression.
          </p>
          <span className="card-foot">DESIGN &amp; DEVELOPMENT</span>
        </article>
        <article className="approach-card">
          <span className="card-index">02</span>
          <div className="card-mark" aria-hidden="true">◈</div>
          <h3>E-commerce, made clear</h3>
          <p>
            Considered storefronts with intuitive product discovery and a
            smoother path from browsing to checkout.
          </p>
          <span className="card-foot">PRODUCT &amp; COMMERCE</span>
        </article>
        <article className="approach-card">
          <span className="card-index">03</span>
          <div className="card-mark" aria-hidden="true">⌘</div>
          <h3>Content with a home</h3>
          <p>
            Flexible blog and CMS experiences that make publishing feel as
            simple as reading.
          </p>
          <span className="card-foot">WEB &amp; CONTENT</span>
        </article>
      </div>
    </section>
  );
}

export default Experience;
