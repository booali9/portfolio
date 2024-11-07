import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCES } from '../consanant';

function Experience() {
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
      <h1 className="about">Experience</h1>
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
          {/* Mapping through the EXPERIENCES array */}
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="experience-item">
              {experience.year && <p><strong>Year:</strong> {experience.year}</p>}
              {experience.role && <p><strong>Role:</strong> {experience.role}</p>}
              {experience.company && <p><strong>Company:</strong> {experience.company}</p>}
              {experience.description && <p><strong>Description:</strong> {experience.description}</p>}
              {experience.technologies && experience.technologies.length > 0 && (
                <p><strong>Technologies:</strong> {experience.technologies.join(", ")}</p>
              )}
              <hr />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
