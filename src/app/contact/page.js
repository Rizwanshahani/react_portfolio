import ContactForm from "../../components/contact-form";
import socialLinks from "../../data/social-links";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Rizwan Shahani about a project.",
};

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <header className="page-intro">
        <p className="eyebrow">Start a conversation</p>
        <h1>
          Let&apos;s make something
          <em> meaningful.</em>
        </h1>
        <p>
          Tell me a little about what you&apos;re working on. I&apos;d love to
          hear about your idea.
        </p>
      </header>

      <div className="contact-page-grid">
        <ContactForm />
        <aside className="contact-aside">
          <p className="eyebrow">Prefer a direct hello?</p>
          <h2>Let&apos;s connect.</h2>
          <a className="contact-aside-email" href="mailto:rizwanshahani432@gmail.com">
            rizwanshahani432@gmail.com
          </a>
          <p className="contact-location">Based in Pakistan · Working worldwide</p>
          <div className="contact-aside-rule" />
          <p className="social-label">CONNECT &amp; SHARE</p>
          <div className="contact-list">
            {socialLinks.map((social) => (
              <a
                className="contact-link"
                href={social.href}
                key={social.label}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
