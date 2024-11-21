import React from "react";
import projectImage from "../assets/crystal.png";
import projectIm from "../assets/siu.png";
import projectI from "../assets/bluedoors2.png";

const Projects = () => {
  const projects = [
    
    {
      description:
        "Separación de productos y empaque en los camiones correspondientes.",
      projectsImageSrc: projectImage,
    },
    {
      description: "Operario de limpieza en áreas comunes del hotel.",
      projectsImageSrc: projectI,
    },
    {
      description: "Operario de aseo en laboratorios.",
      projectsImageSrc: projectIm,
    },
    
  ];

  return (
    <div
    
      name="Projects"
      className="h-screen w-screen flex flex-col items-center"
    ><section id="trabajos"></section>
      <h2 className="font-semibold text-[40px] mt-6 text-blue-500">Trabajos</h2>

      <div className="gap-8 mt-10 grid grid-cols-1 md:grid-cols-3">
        {projects.map((p, index) => (
          <div
            key={index} // Clave única para cada elemento
            className="relative w-[200px] h-[200px] border p-2 bg-slate-500"
          >
            <img
              className="object-cover w-full h-full"
              src={p.projectsImageSrc}
              alt={`Imagen del proyecto: ${p.description}`}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 backdrop-blur-sm hover:backdrop-blur transition-opacity duration-300">
              <p className="text-white text-center">{p.description}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
