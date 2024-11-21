import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      name="About"
      className="flex flex-col items-center justify-center h-screen w-screen bg-[#081b65] text-white"
    >
      <section id="about"></section>
      <h2 className="text-3xl font-bold mb-8">About</h2>

      <motion.div
        className="w-4/5 md:w-3/5 lg:w-2/5 text-center bg-[#16213e] rounded-lg shadow-lg p-8"
        initial={{
          borderColor: "#16213e", // Color inicial del borde
          borderWidth: "2px", // Grosor inicial del borde
        }}
        animate={{
          borderColor: ["#4A90E2", "#50C878", "#F1C40F", "#4A90E2"], // Colores del borde en secuencia
          borderWidth: ["2px", "4px", "6px", "4px", "2px"], // Variación del grosor
        }}
        transition={{
          duration: 4, // Duración de toda la animación
          repeat: Infinity, // Repetición infinita
          ease: "easeInOut", // Transiciones suaves
        }}
      >
        <p className="text-base md:text-lg">
          Soy una persona emprendedora y visionaria, con gran capacidad de
          adaptación ante los cambios. Tengo un fuerte deseo de adquirir nuevos
          conocimientos y destrezas. Disfruto trabajar en equipo y practico el
          respeto, la cordialidad y la tolerancia en todas mis interacciones.
          Además, manejo la presión de manera efectiva para alcanzar mis
          objetivos. Mi meta es completar mis estudios superiores y expandir
          mis conocimientos en el ámbito laboral.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
