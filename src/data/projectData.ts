// Importing interfaces
import { Project } from "../common/types.ts";

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

export default projectData