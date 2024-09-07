import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import ExperienceBlock from "./components/ExperienceBlock/ExperienceBlock";
import ProjectBlock from "./components/ProjectBlock/ProjectBlock";
import Footer from "./components/Footer/Footer";
import "./App.css";

// Importing images
import image1 from "./assets/images/university_of_edinburgh.png";
import image2 from "./assets/images/Google.png";
import image3 from "./assets/images/Microsoft.png";
import dissertation from "./assets/images/diss-chart.png";
import rodistro from "./assets/images/rodistro.jpg";

// Variables
const introduction =
  "Hi, I'm Lorna! I an an enthusiastic, technical and ambitious Software Engineer, with a particular interest in solving hard problems and collaborating with great people. I have a BSc in Computer Science from the University of Edinburgh.";

const experienceData = [
  {
    id: 1,
    imgSrc: image1,
    timeframe: "Sept 2018 - July 2022",
    description:
      "Completed a BSc in Computer Science at the University of Edinburgh.",
  },
  {
    id: 2,
    imgSrc: image2,
    timeframe: "July - Sept 2020",
    description:
      "Worked as a STEP (Student Technical Engineering Program) Intern at Google, in the Google Ads team.",
  },
  {
    id: 3,
    imgSrc: image2,
    timeframe: "June - Sept 2021",
    description:
      "Worked as a Software Engineer Intern at Google, in the Security team for Fitbit.",
  },
  {
    id: 4,
    imgSrc: image3,
    timeframe: "Sept 2022 - Aug 2024",
    description:
      "Worked as a Software Engineer at Microsoft, within Azure for Operators, on telecommunication products.",
  },
];

const projectData = [
  {
    id: 1,
    title: "Academic Research - Machine Translation",
    imgSrc: dissertation,
    timeframe: "Sept 2021 - Apr 2022",
    description:
      "Generalisability of Multilingual Models in Translation of Low Resource Languages",
  },
  {
    id: 2,
    title: "System Design Project - Assistive Robot",
    imgSrc: rodistro,
    timeframe: "Sept 2021 - May 2022",
    description:
      "Created an assistive robot, Rodistro, to automate menial tasks within a hospital environment.",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="experience-section">
      {experienceData.map((exp) => (
        <ExperienceBlock
          key={exp.id}
          imgSrc={exp.imgSrc}
          timeframe={exp.timeframe}
          description={exp.description}
        />
      ))}
    </div>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <div className="project-section">
      {projectData.map((exp) => (
        <ProjectBlock
          key={exp.id}
          title={exp.title}
          imgSrc={exp.imgSrc}
          timeframe={exp.timeframe}
          description={exp.description}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <ContentBlock
        id="experience"
        header={"Experience"}
        paragraph={<ExperienceSection />}
      />
      <ContentBlock
        id="projects"
        header={"Projects"}
        paragraph={<ProjectSection />}
      />
      <Footer />
    </div>
  );
}

export default App;
