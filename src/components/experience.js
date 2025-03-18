import React from "react";

function Experience() {
  return (
    <>
      <div className="container-experience" id="experience">
        <h1>Experience</h1>
        <center>
          <div className="ex"data-aos="zoom-in"data-aos-duration="1000">
            <div className="text">
              <h1>🎨 Personal Portfolio Website:</h1>
              <p>
                Build a responsive portfolio with HTML, CSS, and JavaScript,
                then host it on GitHub Pages or Netlify.
              </p>
            </div>
          </div>
          <div className="ex"data-aos="zoom-in" data-aos-duration="1000">
            <div className="text">
              <h1>🛒 E-Commerce Website:</h1>
              <p>
                Develop a basic e-commerce site with product listings, a
                shopping cart, and Stripe payment integration.
              </p>
            </div>
          </div>
          <div className="ex"data-aos="zoom-in"data-aos-duration="1000">
            <div className="text">
              <h1>🏢 Blog Platform with CMS:</h1>
              <p>
                Create a simple blog platform with user authentication, content
                management, and a database like MySQL or MongoDB
              </p>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Experience;
