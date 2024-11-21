import React from "react";
import profilepic from "../assets/yo.png";
import { TypeAnimation } from "react-type-animation";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineWhatsApp,
} from "react-icons/ai";

import { motion } from "framer-motion"

const Hero = () => {
    return (
      <div className='mt-24 max-w-[1200px] mx-auto relative'>
        <div className='grid md:grid-cols-2 place-items-center gap-8'>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                'Estudiate de software',
                1000,
                'Bodegero',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className='font-bold text-blue-400 text-xl md:text-5xl italic- mb-4'
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className='text-blue-200 md:text-7xl text-5xl tracking-tight mb-4'
            >
              HEY, I AM...<br />
              <span className='text-blue-500'>Duvan Santiago Mesa Isaza</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className='text-blue-500 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
            >
              "Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día."
            </motion.p>             
            <motion.div
              initial={{ opacity: 0, y:50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className='flex flex-row items-center gap-6 my-4 md:mb-0'
            >
                <motion.button
                  whileHover={{scale:1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)"}}
                  className='z-10 cursor-pointer font-bold text-blue-300 md:w-auto p-4 border border-blue-600 rounded-xl'
                > <a
                href='https://drive.google.com/file/d/1zDQNgCat5DNUP-TMmlHRcH1Fa7D9CQKl/view?usp=drive_link'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                Download CV
              </a>
            
                </motion.button>

                <div className="flex gap-6 flex-row text-4xl md:text-6xl text-blue-400 z-20">
                    <motion.a whileHover={{scale:1.2}} href='https://github.com/duvanmesa1996' target="_blank">
                        <AiOutlineGithub/>
                    </motion.a>

                    <motion.a whileHover={{scale:1.2}} href='https://www.instagram.com/duvanmesaisaza/' target="_blank">
                        <AiOutlineInstagram/>
                    </motion.a>

                    <motion.a whileHover={{scale:1.2}} href='https://www.facebook.com/share/1Kpkbp4a8B/?mibextid=qi2Omg' target="_blank">
                        <AiOutlineFacebook/>
                    </motion.a>

                    <motion.a whileHover={{scale:1.2}} href='https://api.whatsapp.com/send?phone=3137723448&text=Hola%20te%20contestare%20en%20breve..%20' target="_blank">
                        <AiOutlineWhatsApp/>
                    </motion.a>
                </div>
            </motion.div>            
          </motion.div>

          <motion.img
            src={profilepic}
            className="w-[360px] md:w-[450px] md:order-last"
            initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1}}
          />

        </div>
      </div>
    )
}

export default Hero;
