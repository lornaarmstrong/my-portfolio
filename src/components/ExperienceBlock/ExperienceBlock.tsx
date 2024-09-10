import React from "react";
import "./ExperienceBlock.css";

// Define the props type for the ExperienceBlock component
type ExperienceBlockProps = {
  key: number;
  imgSrc: string;
  timeframe: string;
  description: string;
  onOpenModal: () => void;
};

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  imgSrc,
  timeframe,
  description,
  onOpenModal,
}) => {
  return (
    <div className="experience-block">
      <img src={imgSrc} alt="Experience Image" className="experience-image" />
      <p className="timeframe">{timeframe}</p>
      <p>{description}</p>
      <button className="read-more-btn" onClick={onOpenModal}>
        Read More
      </button>
    </div>
  );
};

export default ExperienceBlock;
