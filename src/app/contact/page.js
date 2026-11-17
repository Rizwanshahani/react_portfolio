import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "../../components/contact-form";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Rizwan Shahani about a project.",
};

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/923197941472", icon: <FaWhatsapp /> },
  { label: "Instagram", href: "https://www.instagram.com/rizwanshahani7624", icon: <FaInstagram /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-rizwan-0a967b41b", icon: <FaLinkedinIn /> },
  { label: "GitHub", href: "https://github.com/Rizwanshahani", icon: <FaGithub /> },
  {
    label: "Share portfolio on Facebook",
    href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frizwanshahani.vercel.app",
    icon: <FaFacebookF />,
  },
];

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
