import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">04 — Let&apos;s work together</p>
        <h2>Have a good one <em>in mind?</em></h2>
        <p className="contact-copy">
          I&apos;m always interested in thoughtful projects and good people.
          Tell me what you&apos;re working on.
        </p>
        <Link className="button button-primary contact-cta" href="/contact">
          Start a conversation <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default Contact;
