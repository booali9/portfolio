import React from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTACT } from '../consanant';
import { useRef } from 'react';

function Contact() {
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
      <h1 className='about'>Get in Touch</h1>
      <div className="contact-info">
        {Object.keys(CONTACT).map((key, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: isInView ? index * 0.5 : 0 }}
          >
            {CONTACT[key]}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default Contact;
