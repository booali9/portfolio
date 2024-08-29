import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HERO_CONTENT } from '../consanant';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className='hero-container border-b border-neutral-900 pb-4 lg:mb-35'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="flex-container">
        <motion.div
          className="text"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1 className='BACK'>Booali Kazmi</h1>
          <span className='dev'>Mern Stack Developer</span>
          <p className='graph'>{HERO_CONTENT}</p>
        </motion.div>
        <motion.div
          className="pic"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <img src="about.png" alt="Profile" />
        </motion.div>
      </div>
    </motion.div>
  );
}
