import React from "react";
import "./ExperienceBlock.css";

// Define the props type for the ExperienceBlock component
type ExperienceBlockProps = {
  imgSrc: string;
  timeframe: string;
  description: string;
};

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  imgSrc,
  timeframe,
  description,
}) => {
  return (
    <div className="experience-block">
      <img src={imgSrc} alt="Experience Image" className="experience-image" />
      <p className="timeframe">{timeframe}</p>
      <p>{description}</p>
      <button className="read-more-btn">Read More</button>
    </div>
  );
};

export default ExperienceBlock;
