import React from "react";
import "./ProjectBlock.css";

// Define the props type for the ProjectBlock component
type ProjectBlockProps = {
  title: string;
  description: string;
  award?: string;
  technology_used: string[];
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  title,
  description,
  award,
  technology_used,
}) => {
  return (
    <div className="project-block">
      <p className="title">{title}</p>
      <p>{description}</p>
      <p className="award">{award}</p>
      <div className="technology-list">
        {technology_used.map((tech, index) => (
          <span key={index} className="technology-item">
            {tech}
          </span>
        ))}
      </div>
      <button className="read-more-btn">Find Out More</button>
    </div>
  );
};

export default ProjectBlock;
