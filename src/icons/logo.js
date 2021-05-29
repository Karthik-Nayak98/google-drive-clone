import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const KPathVariants = {
  hidden: { pathLength: 0, fill: 'rgba(255, 159, 28, 0)' },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 159, 28, 1)',
    transition: {
      default: { duration: 1, ease: 'easeInOut' },
      fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(40, 40, 70, 1)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(40, 40, 70, 1)',
    transition: {
      default: { duration: 1, ease: 'easeInOut' },
      fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
    },
  },
};
const LOGO = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      className='sm:w-10 sm:h-10 w-8 h-8 inline-flex'
      viewBox='0 0 24 24'
      variants={svgVariants}
      initial='hidden'
      animate='visible'
      strokeLinejoin='round'
      strokeLinecap='round'>
      <motion.path
        stroke='#FF9F1C'
        strokeWidth='2'
        variants={pathVariants}
        d='M3.494 0h17.362A3.154 3.154 0 0124 3.145v17.71A3.154 3.154 0 0120.856 24H3.144A3.154 3.154 0 010 20.855V3.492A3.504 3.504 0 013.494 0z'
      />
      <motion.path
        stroke='#FF9F1C'
        strokeWidth='1'
        variants={KPathVariants}
        d='M5.71 6.066h3.662v4.483l3.842-4.483h4.874l-4.33 4.46 4.532 7.408h-4.512l-2.504-4.873-1.902 1.982v2.889H5.71z'
      />
    </motion.svg>
  );
};

export default LOGO;
