import { ProjectCard } from "../cards/ProjectCard";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "3D Design",
      description:
        "Sed placerat sem risus, id iaculis leo magna in. Proin massa lectus.",
    },
    {
      title: "Mobile Apps",
      description:
        "Sed placerat sem risus, id iaculis leo magna in. Proin massa lectus.",
    },
    {
      title: "Landing Page",
      description:
        "Sed placerat sem risus, id iaculis leo magna in. Proin massa lectus.",
    },
    {
      title: "Presentation",
      description:
        "Sed placerat sem risus, id iaculis leo magna in. Proin massa lectus.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">
        Our Latest Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
