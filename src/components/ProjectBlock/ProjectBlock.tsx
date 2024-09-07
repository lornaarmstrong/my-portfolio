import React from "react";
import "./ProjectBlock.css";

// Define the props type for the ProjectBlock component
type ProjectBlockProps = {
  imgSrc: string;
  title: string;
  timeframe: string;
  description: string;
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  imgSrc,
  title,
  timeframe,
  description,
}) => {
  return (
    <div className="project-block">
      <img src={imgSrc} alt="Project Image" className="project-image" />
      <p className="title">Project: {title}</p>
      <p className="timeframe">{timeframe}</p>
      <p>{description}</p>
      <button className="read-more-btn">Read More</button>
    </div>
  );
};

export default ProjectBlock;
