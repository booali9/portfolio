import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiNextdotjs, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs, SiCplusplus, SiC } from 'react-icons/si';

function Icons() {
  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.div
      className='tech'
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <h1 className='text'>Technologies</h1>
      <div className='icon-container'>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'blue', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <RiReactjsLine />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'green', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiMongodb />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'black', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiNextdotjs />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'blue', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiTypescript />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'orange', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiHtml5 />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'blue', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiCss3 />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'blue', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiBootstrap />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'yellow', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiNodedotjs />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'blue', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiCplusplus />
        </motion.div>
        <motion.div
          className='icon'
          style={{ textAlign: 'center', color: 'blue', fontSize: '2rem' }}
          variants={iconVariants}
        >
          <SiC />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Icons;
