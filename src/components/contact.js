import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
function Contact() {
  return (
    <>
      <div className="container-contact"id="contact">
        <h1>Contact Us</h1>
        <div className="contact-list">
          <div className="contact-items"data-aos="zoom-out">
            <a href="https://wa.me/923090687624" target="_blank"rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          <div className="contact-items"data-aos="zoom-out">
            <a
              href="https://www.instagram.com/rizwanshahani7624?igsh=MXJxZWxlZzE5aTV2YQ=="
              target="_blank"rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="contact-items"data-aos="zoom-out">
            <a
              href="https://www.facebook.com/share/1HatowFof3/"
              target="_blank"rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>
          </div>
          <div className="contact-items"data-aos="zoom-out">
            <a href="https://www.linkedin.com/in/rizwan-shahani-066973356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <TiSocialLinkedinCircular />
            </a>
          </div>
          <div className="contact-items"data-aos="zoom-out">
            <a
              href="https://www.snapchat.com/add/deadb0y32?share_id=kAhGhxHe6Cw&locale=en-US"
              target="_blank"rel="noopener noreferrer"
            >
              <FaSnapchatSquare />
            </a>
          </div>
          <div className="contact-items"data-aos="zoom-out">
            <a href="https://github.com/Rizwanshahani" target="_blank"rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="contact-items"data-aos="zoom-out">
            <a href="mailto:rizwanshahani432@gmail.com" target="_blank"rel="noopener noreferrer">
            <BiLogoGmail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
