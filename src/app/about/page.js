import Experience from "../../components/experience";
import Skill from "../../components/skill";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Learn about Rizwan Shahani's approach to building for the web.",
};

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <header className="page-intro">
        <p className="eyebrow">A little about me</p>
        <h1>
          Thoughtful design.
          <em> Useful technology.</em>
        </h1>
        <p>
          I&apos;m Rizwan Shahani, a full-stack web developer who enjoys turning
          good ideas into clear, considered digital experiences.
        </p>
      </header>

      <section className="about-story">
        <div className="about-photo">
          <img src="/my.jpg" alt="Rizwan Shahani" />
          <span>Rizwan Shahani · Developer</span>
        </div>
        <div className="about-story-copy">
          <p className="eyebrow">How I like to work</p>
          <h2>Built with care, from the first sketch to the final detail.</h2>
          <p>
            I care about how a site feels as much as how it works. My focus is
            on clean interfaces, responsive layouts, and the practical
            engineering that makes them reliable.
          </p>
          <p>
            From a personal portfolio to an online store or content platform, I
            enjoy making the complex feel simple and the everyday feel a little
            more special.
          </p>
          <Link className="text-link" href="/contact">
            Have a project in mind? <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <Experience />
      <Skill />
    </main>
  );
}
