import React from 'react';
import { motion } from 'framer-motion';
const Button = (props) => {
  return (
    <motion.a
      href='google.com'
      className='hidden sm:flex justify-center items-center text-primary text-center px-2 py-1 border font-medium border-primary rounded-lg '
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.2, duration: 1.5, type: 'spring', stiffness: 120 }}
      whileHover={{
        scale: 1.1,
        boxShadow: '0px 0px 6px #FF9F1C',
      }}>
      {props.icon}
      <span>{props.name}</span>
    </motion.a>
  );
};

// hover: bg - primary;
//hover:border-opacity-0 hover:bg-opacity-80
// hover:text-light
export default Button;
