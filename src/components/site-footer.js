import Link from "next/link";

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
        <Link href="/contact">Contact</Link>
      </nav>
      <span className="footer-copyright">© 2026 Rizwan Shahani</span>
    </footer>
  );
}

export default SiteFooter;
