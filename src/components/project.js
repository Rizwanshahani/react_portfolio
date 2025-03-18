import React from "react";

function Project() {
  return (
    <>
      <div className="container-project"id="project">
        <h1>Projects</h1>
        <div className="project-items">
          <div className="pro"data-aos="flip-up">
            <img src="port.webp" alt="" />
            <h3>Portfolio Website</h3>
          </div>
          <div className="pro"data-aos="flip-up">
            <img src="todo.webp" alt="" />
            <h3>Task Management App</h3>
          </div>
          <div className="pro"data-aos="flip-up">
            <img src="com.webp" alt="" />
            <h3>E-commerce Store</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
