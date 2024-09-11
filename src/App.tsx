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
import { Experience, Project } from "./common/types";

// Importing images
import uni_of_edi from "./assets/images/university_of_edinburgh.png";
import google_logo from "./assets/images/Google.png";
import microsoft_logo from "./assets/images/Microsoft.png";
import grad_hat from "./assets/images/grad-hat.jpg";

const EdinburghModalContent = () => (
  <>
    <div className="modal-header-container">
      <div className="modal-header">University of Edinburgh</div>
      <div className="modal-date">Date: 2018 - 2022</div>
    </div>
    <div className="modal-main">
      <img src={grad_hat} alt="Image of Graduation Hat" />
      <p className="modal-paragraph">
        I obtained a <b>BSc in Computer Science</b> from the University of
        Edinburgh, from September 2018 to May 2022. This was the start of my
        Software Engineering journey. I was able to take advantage of the
        quality academic teaching, opportunity to explore topics independently,
        and to sign up to various societies to enrichen my experience. I learnt
        new skills - through Swing Dance Society, and Ballroom Society. I
        fostered a keen interest in languages by joining Linguistics Society. I
        also took part in societies more closely related to my degree - Women in
        STEM Society, HOPPERS Society, and CompSoc Society.
      </p>
    </div>
    <div className="modal-header">Modules Taken</div>
    <div className="modal-body">
      <div className="column">
        <p>
          <b>Year 1</b>
        </p>
        <ul>
          <li>Linear Algebra</li>
          <li>Object-Oriented Programming</li>
          <li>Data & Analysis</li>
          <li>Calculus & Applications</li>
          <li>Foundation Arabic</li>
          <li>Spanish Language 1</li>
        </ul>
        <p>
          <b>Year 2</b>
        </p>
        <ul>
          <li>Software Engineering</li>
          <li>Discrete Maths</li>
          <li>Computer Systems</li>
          <li>Machine Learning</li>
          <li>Algorithms & DS</li>
          <li>Spanish Language 2</li>
        </ul>
      </div>
      <div className="column">
        <p>
          <b>Year 3</b>
        </p>
        <ul>
          <li>Inf Large Practical</li>
          <li>Software Testing</li>
          <li>System Design Project</li>
          <li>Computer Security</li>
          <li>Operating Systems</li>
          <li>Intro to Databases</li>
          <li>Professional Issues</li>
        </ul>
        <p>
          <b>Year 4</b>
        </p>
        <ul>
          <li>Honours Project</li>
          <li>Applied Machine Learning</li>
          <li>Human Computer Interaction</li>
          <li>The Human Factor</li>
          <li>Computing in Classrooms</li>
        </ul>
      </div>
      <div className="column">
        <div className="callout">
          <p>
            <b>Degree Classification:</b>
          </p>
          <p>First Class</p>
          <p>
            <b>Awards & Scholarships:</b>
          </p>
          <ul>
            <li className="award_list_item">
              KAL First Prize for System Design
            </li>
            <li className="award_list_item">
              Edinburgh Award for Industry Experience
            </li>
            <li className="award_list_item">RBS Informatics Scholar</li>
            <li className="award_list_item">DHL UK Undergrad Scholar</li>
          </ul>
          <h1>🏆</h1>
        </div>
      </div>
    </div>
  </>
);

// List of Work Experiences
const experienceData: Experience[] = [
  {
    id: 1,
    imgSrc: uni_of_edi,
    timeframe: "Sept 2018 - July 2022",
    description:
      "Completed a BSc in Computer Science at the University of Edinburgh.",
    modalContent: EdinburghModalContent(),
  },
  {
    id: 2,
    imgSrc: google_logo,
    timeframe: "July - Sept 2020",
    description:
      "Worked as a STEP (Student Technical Engineering Program) Intern at Google, in the Google Ads team.",
    modalContent: (
      <div>
        <h2>Google</h2>
        <p>Detailed information about my Google internship with Ads.</p>
      </div>
    ),
  },
  {
    id: 3,
    imgSrc: google_logo,
    timeframe: "June - Sept 2021",
    description:
      "Worked as a Software Engineer Intern at Google, in the Security team for Fitbit.",
    modalContent: (
      <div>
        <h2>Google</h2>
        <p>Detailed information about my Google internship with Fitbit.</p>
      </div>
    ),
  },
  {
    id: 4,
    imgSrc: microsoft_logo,
    timeframe: "Sept 2022 - Aug 2024",
    description:
      "Worked as a Software Engineer at Microsoft, within Azure for Operators, on telecommunication products.",
    modalContent: (
      <div>
        <h2>Microsoft</h2>
        <p>Detailed information about my work at Microsoft.</p>
      </div>
    ),
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleOpenModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <ContentBlock
        id="experience"
        header={"Experience"}
        content={<ExperienceSection onOpenModal={handleOpenModal} />}
      />
      <ContentBlock
        id="projects"
        header={"Projects"}
        content={<ProjectSection />}
      />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default App;
