import Experience from "../../components/experience";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Meet Rizwan Shahani, a junior frontend developer and IT graduate.",
};

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <header className="page-intro">
        <p className="eyebrow">A little about me</p>
        <h1>
          Muhammad Rizwan.
          <em> Developer by design.</em>
        </h1>
        <p>
          I&apos;m a junior frontend developer and IT graduate based in Layyah,
          Punjab. I focus on responsive React.js interfaces and practical
          ERPNext/Frappe implementation workflows.
        </p>
      </header>

      <section className="about-story">
        <div className="about-photo">
          <img src="/rizwan-portrait.png" alt="Rizwan Shahani" />
        </div>
        <div className="about-story-copy">
          <p className="eyebrow">How I like to work</p>
          <h2>Built with care, from the first sketch to the final detail.</h2>
          <p>
            My frontend work centers on React.js, reusable components, and
            responsive layouts. I also work with JavaScript, HTML, CSS, Git,
            and the fundamentals of integrating REST APIs.
          </p>
          <p>
            Alongside web development, I have practical exposure to ERPNext and
            Frappe setup workflows, master-data imports, chart-of-accounts
            configuration, and implementation documentation. I also lead
            Yovarin, a company focused on enterprise architecture, Next.js
            applications, and ERPNext implementations.
          </p>
          <div className="about-actions">
            <a className="button button-primary" href="/rizwan-shahani-cv.pdf" download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <Link className="text-link" href="/contact">
              Have a project in mind? <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="education-card" aria-labelledby="education-heading">
        <p className="eyebrow">Education</p>
        <div>
          <h2 id="education-heading">Bachelor of Science in Information Technology</h2>
          <p>Government Graduate College Layyah · Affiliated with BZU Multan</p>
        </div>
        <span>2021 — 2025</span>
      </section>

      <Experience />
    </main>
  );
}
