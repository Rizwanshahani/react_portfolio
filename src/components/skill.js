function Skill() {
  const skills = [
    { name: "HTML", image: "/html.png" },
    { name: "CSS", image: "/css.png" },
    { name: "JavaScript", image: "/js.png" },
    { name: "React", image: "/react.png" },
    { name: "Bootstrap", image: "/boot.jpeg" },
    { name: "Python", image: "/python.png" },
    { name: "PHP", image: "/php.png" },
    { name: "C++", image: "/cpp.png" },
  ];

  return (
    <section className="content-section skills-section" id="skill">
      <div className="section-heading">
        <p className="eyebrow">02 — The toolkit</p>
        <div>
          <h2>Tools for turning ideas <em>into reality.</em></h2>
          <p className="section-intro">
            A practical mix of front-end craft and full-stack fundamentals.
          </p>
        </div>
      </div>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-index">0{index + 1}</span>
            <div className="skill-logo">
              <img src={skill.image} alt="" />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
