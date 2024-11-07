import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HERO_CONTENT } from '../consanant';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="hero-container border-b border-neutral-900 pb-4 lg:mb-35"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="flex-container flex flex-col lg:flex-row items-center justify-between gap-6">
        <motion.div
          className="text-container text-center lg:text-left w-full lg:max-w-lg space-y-4"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-4xl font-bold w-full">Booali Kazmi</h1>
          <span className="text-xl block dev w-full">Mern Stack Developer</span>
          <p className="text-lg text-gray-500 w-full">{HERO_CONTENT}</p>
        </motion.div>
        
        <motion.div
          className="pic w-full lg:max-w-xs"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            className="w-full h-auto rounded-full shadow-lg"
            src="about.png"
            alt="Profile"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
