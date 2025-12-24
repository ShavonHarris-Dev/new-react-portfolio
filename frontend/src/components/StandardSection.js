export default function StandardProject({ title, description, tech, codeLink }) {
  return (
    <div className="project">
      <h3 className="project-title-small">{title}</h3>
      <p className="project-description-small">{description}</p>
      <div className="tech-tags">
        {tech.map((tag, index) => (
          <span key={index} className="tech-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {codeLink && <a href={codeLink} className="project-link">View Code →</a>}
      </div>
    </div>
  );
}
