function SkillCard(props) {
  return (
    <div className="skill-card">
      <div className="skill-head">
        <b>{props.name}</b>
        <span>{props.level}</span>
      </div>
      <div className="skill-bar">
        <div style={{ width: props.level === "Advanced" ? "90%" : props.level === "Intermediate" ? "70%" : "45%" }}></div>
      </div>
    </div>
  );
}

export default SkillCard;
