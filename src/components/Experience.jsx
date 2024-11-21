import React from "react";
import { 
  DiHtml5,
  DiReact,
  DiPython,
  DiJavascript,
  DiDjango 
} from "react-icons/di";
import { motion } from "framer-motion";


const Experience = () => {

  return (   
  
    <div className="flex flex-col items-center w-full py-24">
    <section id="experience" ></section>
    <h2 className="text-4xl font-bold mb-8 text-blue-500">Mi Experiencia</h2>
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 2 }}
      className="flex flex-row text-3xl px-12 md:px-0 w-full justify-center items-center py-24"
    >
    
      <p className="text-blue-600 mr-6">Esto estudio actualmente</p>
      <DiHtml5 className="text-orange-600 mx-2" />
      <DiJavascript className="text-yellow-400 mx-2" />
      <DiReact className="text-blue-600 mx-2" />
      <DiPython className="text-yellow-400 mx-2" />
      <DiDjango className="text-green-600 mx-2" />

      <div className="id "></div>

    </motion.div>

   
</div>

);
};
export default Experience;
