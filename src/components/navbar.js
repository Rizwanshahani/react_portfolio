import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
   const [isOpen, setIsOpen]=useState(false)
   
     return (
    <>
      <div
        className="container-nav"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="right">
          <h2>Portfolio</h2>
        </div>
        <button className="navm left" onClick={()=>setIsOpen(!isOpen)}>
            <IoReorderThreeOutline />
          </button>
        <div className={`left  ${isOpen ? "show" : "hide"}`}>
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
