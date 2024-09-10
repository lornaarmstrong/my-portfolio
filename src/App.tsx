import React, { useState } from "react";

import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import ExperienceBlock from "./components/ExperienceBlock/ExperienceBlock";
import ProjectBlock from "./components/ProjectBlock/ProjectBlock";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import "./App.css";

// Importing interfaces
import { Experience, Project, ModalProps } from "./common/types";

// Importing images
import uni_of_edi from "./assets/images/university_of_edinburgh.png";
import google_logo from "./assets/images/Google.png";
import microsoft_logo from "./assets/images/Microsoft.png";

// List of Work Experiences
const experienceData: Experience[] = [
  {
    id: 1,
    imgSrc: uni_of_edi,
    timeframe: "Sept 2018 - July 2022",
    description:
      "Completed a BSc in Computer Science at the University of Edinburgh.",
  },
  {
    id: 2,
    imgSrc: google_logo,
    timeframe: "July - Sept 2020",
    description:
      "Worked as a STEP (Student Technical Engineering Program) Intern at Google, in the Google Ads team.",
  },
  {
    id: 3,
    imgSrc: google_logo,
    timeframe: "June - Sept 2021",
    description:
      "Worked as a Software Engineer Intern at Google, in the Security team for Fitbit.",
  },
  {
    id: 4,
    imgSrc: microsoft_logo,
    timeframe: "Sept 2022 - Aug 2024",
    description:
      "Worked as a Software Engineer at Microsoft, within Azure for Operators, on telecommunication products.",
  },
];

// List of Technical Projects
const projectData: Project[] = [
  {
    id: 1,
    title: "Academic Research - Machine Translation",
    description:
      "Generalisability of Multilingual Models in Translation of Low Resource Languages",
    technology_used: ["PyTorch", "Hugging Face", "TensorFlow"],
  },
  {
    id: 2,
    title: "Assistive Robot System Design",
    description:
      "Created an assistive robot, Rodistro, to automate menial tasks within a hospital environment.",
    award: "🏆 Won KAL Commendation Award First Prize",
    technology_used: ["Python", "Figma", "Autodesk CAD"],
  },
  {
    id: 3,
    title: "Informatics Large Practical",
    description: "Autonomous Drone Sensor Mapping",
    technology_used: ["Java", "GeoJSON", "Maven", "HTTP Client"],
  },
];

interface ExperienceSectionProps {
  onOpenModal: () => void;
  isModalOpen: boolean;
  onCloseModal: () => void;
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
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <div className="project-section">
      {projectData.map((project) => (
        <ProjectBlock
          key={project.id}
          title={project.title}
          description={project.description}
          award={project.award}
          technology_used={project.technology_used}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <ContentBlock
        id="experience"
        header={"Experience"}
        content={
          <ExperienceSection
            onOpenModal={handleOpenModal}
            isModalOpen={isModalOpen}
            onCloseModal={handleCloseModal}
          />
        }
      />
      <ContentBlock
        id="projects"
        header={"Projects"}
        content={<ProjectSection />}
      />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
