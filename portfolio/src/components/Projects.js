import React from "react";

const projects = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1" },
  { title: "Proyecto 2", description: "Descripción del proyecto 2" },
  { title: "Proyecto 3", description: "Descripción del proyecto 3" },
];

const Projects = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Proyectos</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
