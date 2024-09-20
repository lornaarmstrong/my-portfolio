import ProjectBlock from "./ProjectBlock";
import projectData from "../../data/projectData";

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

export default ProjectSection;
