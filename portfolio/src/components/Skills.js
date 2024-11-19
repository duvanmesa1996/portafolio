import React from "react";

const skills = ["React", "Tailwind CSS", "JavaScript", "Git", "Trabajo en equipo"];

const Skills = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-2">Habilidades</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
