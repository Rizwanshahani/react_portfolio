"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const contactEmail = "rizwanshahani432@gmail.com";

function ContactForm() {
  const [emailHref, setEmailHref] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const projectType = formData.get("projectType") || "Not specified";
    const message = formData.get("message");
    const subject = `Portfolio inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      `Project type: ${projectType}`,
      "",
      message,
    ].join("\n");

    setEmailHref(
      `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field">
          <span>Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Jane Smith"
            required
          />
        </label>
        <label className="form-field">
          <span>Email address</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="jane@example.com"
            required
          />
        </label>
        <label className="form-field form-field-wide">
          <span>What are you looking to build?</span>
          <select name="projectType" defaultValue="">
            <option value="">Choose a project type</option>
            <option value="Website">Website</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Web application">Web application</option>
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="form-field form-field-wide">
          <span>A little about your project</span>
          <textarea
            name="message"
            placeholder="Share your idea, goals, or anything else I should know..."
            rows="6"
            required
          />
        </label>
      </div>

      <p className="form-note" id="contact-form-note">
        Your details stay in this browser. Submitting prepares an email draft;
        nothing is sent until you choose Send in your email app.
      </p>
      <button className="button button-primary form-submit" type="submit">
        Prepare email <FiArrowUpRight aria-hidden="true" />
      </button>
      {emailHref && (
        <div className="form-result" role="status">
          <p>Your message is ready. Open your email app to send it.</p>
          <a className="button button-quiet" href={emailHref}>
            Open email app <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
