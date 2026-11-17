import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/923197941472"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Rizwan on WhatsApp at +92 319 7941472"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
