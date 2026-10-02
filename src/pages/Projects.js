import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      name: "My Portfolio Website",
      description: "A personal portfolio website created using React JS.",
      technologies: "React JS, HTML, CSS",
    },
    {
      name: "To-Do List App",
      description: "A simple app to add and manage daily tasks.",
      technologies: "React JS, JavaScript, API",
    },
    {
      name: "Amazon Clone",
      description: "A shopping website UI inspired by Amazon.",
      technologies: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <section className="page content-page projects">
      <p className="eyebrow">MY WORK</p>
      <h1 className="page-title">
        Featured <span>projects</span>
      </h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            number={`0${index + 1}`}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
