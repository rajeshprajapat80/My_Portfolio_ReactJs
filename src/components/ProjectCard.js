function ProjectCard(props) {
  return (
    <article className="project-card">
      <div className="project-number">{props.number}</div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>
        <b>Technologies:</b> {props.technologies}
      </p>
    </article>
  );
}

export default ProjectCard;
