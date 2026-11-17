import Link from "next/link";
import socialLinks from "../data/social-links";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/">
        Rizwan Shahani
      </Link>
      <span>Designed with intention. Built for the web.</span>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Journal</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="footer-social">
        <span className="footer-social-label">Connect &amp; Share</span>
        <div className="footer-social-links">
          {socialLinks.map((social) => (
            <a
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
      </div>
      <span className="footer-copyright">© 2026 Rizwan Shahani</span>
    </footer>
  );
}

export default SiteFooter;
