import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Experience() {
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
      <h1 className='about'>Experiences</h1>
      <motion.p
        className='experience-paragraph'
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1}}
      >
        Although I am at the beginning of my professional journey, I have honed my skills in a variety of modern technologies. I have a solid understanding of frontend development with HTML, CSS, and JavaScript, and I am proficient in frameworks like React and Next.js. My backend skills include working with Node.js and MongoDB, and I have experience with TypeScript for developing scalable and maintainable code. Additionally, I am well-versed in foundational programming languages such as C and C++, which have provided me with a strong base in computer science principles. I am eager to apply my technical knowledge in real-world projects and contribute to a dynamic team.
      </motion.p>
    </motion.div>
  );
}

export default Experience;
