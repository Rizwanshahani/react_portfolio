import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/923197941472", icon: <FaWhatsapp aria-hidden="true" /> },
  { label: "Instagram", href: "https://www.instagram.com/rizwanshahani7624", icon: <FaInstagram aria-hidden="true" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-rizwan-0a967b41b", icon: <FaLinkedinIn aria-hidden="true" /> },
  { label: "GitHub", href: "https://github.com/Rizwanshahani", icon: <FaGithub aria-hidden="true" /> },
  {
    label: "Share portfolio on Facebook",
    href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frizwanshahani.vercel.app",
    icon: <FaFacebookF aria-hidden="true" />,
  },
];

export default socialLinks;
