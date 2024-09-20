import { experienceData } from "../../data/experienceData.ts";
import ExperienceBlock from "./ExperienceBlock.tsx";

interface ExperienceSectionProps {
  onOpenModal: (content: React.ReactNode) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenModal,
}) => {
  return (
    <div className="experience-section">
      {experienceData.map((exp) => (
        <ExperienceBlock
          key={exp.id}
          imgSrc={exp.imgSrc}
          timeframe={exp.timeframe}
          description={exp.description}
          modalContent={exp.modalContent}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
