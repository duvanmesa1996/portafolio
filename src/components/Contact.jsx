import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-screen 2xl:mt-20   h-screen flex items-center flex-col ">
      <section id="contact"></section>
      <h2 className="font-semibold text-[40px] text-blue-500">Contact</h2>
      <form
        action="https://getform.io/f/byvvejwa"
        method="POST"
        className="flex flex-col items-center justify-center pt-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-slate-800 mt-6  2xl:w-[400px] sm:w-[300px]"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-slate-400 mt-6  2xl:w-[400px]  sm:w-[300px]"
        />
        <textarea
          name="message"
          placeholder="Message"
          id=""
          resize="none"
          className="border border-blue-900 mt-6   2xl:w-[400px]  sm:w-[300px]   "
        ></textarea>
       
        <motion.button
      type="submit"
      whileHover={{
        scale: 1.1, 
        backgroundColor: "#4A90E2", 
        borderColor: "#fff", 
      }}
      whileTap={{
        scale: 0.95, 
        backgroundColor: "#3b82f6", 
      }}
      transition={{
        type: "spring", 
        stiffness: 300,
        damping: 15,
      }}
      className="border border-gray-200 mt-8 2xl:w-[300px] sm:w-[120px] p-2 text-white bg-blue-600 rounded"
    >
      Enviar
    </motion.button>
      </form>
    </div>
  );
};

export default Contact;
