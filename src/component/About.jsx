import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ABOUT_TEXT } from '../consanant';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="about-container"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <h1 className="about">About me</h1>
      <div className="content-wrapper">
        <motion.div
          className="image-container"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <img src="profile.jpg" alt="About" />
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
