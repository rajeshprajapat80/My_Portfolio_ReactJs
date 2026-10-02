import SkillCard from "../components/SkillCard";

function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React JS", level: "Intermediate" },
    { name: "Node JS", level: "Beginner" },
    { name: "Express JS", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
  ];

  return (
    <section className="page content-page skills">
      <p className="eyebrow">MY SKILLS</p>
      <h1 className="page-title">
        What I <span>work with</span>
      </h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
