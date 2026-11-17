"use client";

import { useEffect, useRef, useState } from "react";

const accessMessage =
  "Only admins can view this project. Redirecting you to the contact form to arrange a meeting.";

export default function ProjectDestination({
  href,
  className,
  ariaLabel,
  external = false,
  restricted = false,
  children,
}) {
  const [showToast, setShowToast] = useState(false);
  const redirectTimer = useRef(null);

  useEffect(
    () => () => {
      window.clearTimeout(redirectTimer.current);
    },
    []
  );

  function handleClick(event) {
    if (!restricted) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    window.clearTimeout(redirectTimer.current);
    setShowToast(true);
    redirectTimer.current = window.setTimeout(() => {
      window.location.assign(href);
    }, 1600);
  }

  return (
    <>
      <a
        className={className}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        aria-label={ariaLabel}
        onClick={restricted ? handleClick : undefined}
      >
        {children}
      </a>
      {showToast && (
        <div className="project-access-toast" role="status" aria-live="polite">
          {accessMessage}
        </div>
      )}
    </>
  );
}
