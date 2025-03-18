import React from "react";

function Navbar() {
  return (
    <>
      <div className="container-nav" data-aos="fade-down" data-aos-duration="1000">
        <div className="right">
          <h2>Portfolio</h2>
        </div>
        <div className="left">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
