import { Background } from "../components/Background";
import JumbotronProjects from "../components/projects/JumbotronProjects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">
      <Background />
      <JumbotronProjects />
    </div>
  );
};
export default Projects;
