import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '../consanant';

// Import icons
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiBootstrap, SiExpress, SiNextdotjs, SiCplusplus } from 'react-icons/si';

// Map technology names to icons
const technologyIcons = {
  "React": <RiReactjsLine className="icon-react" />,
  "Next.js": <SiNextdotjs className="icon-next" />,
  "Node.js": <FaNodeJs className="icon-nodejs" />,
  "MongoDB": <SiMongodb className="icon-mongodb" />,
  "HTML": <FaHtml5 className="icon-html" />,
  "CSS": <FaCss3Alt className="icon-css" />,
  "Bootstrap": <SiBootstrap className="icon-bootstrap" />,
  "Express": <SiExpress className="icon-express" />,
  "C++": <SiCplusplus className="icon-Cplus" />,
};

function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className='about-container'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <h1 className='about'>Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <div className='project'>
              <img src={project.image} alt={project.title} className="project-image-right" />
              <div className='project-details-left'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className="technology-list">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="technology-item">
                      {technologyIcons[tech]} <span className="technology-name">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Work;
