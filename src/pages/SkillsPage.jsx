import React, { useEffect } from 'react';
import Header from '../components/Header';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Skills = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
  });
  const boxVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    hover: {
      scale: 1.1,
      y: -4,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: (index + 1) * 0.2,
        },
      }));
    }
  }, [controls, inView]);
  return (
    <section className='flex flex-col justify-center items-center'>
      <Header name='Technical Skills' />
      <div
        className='flex flex-wrap justify-center sm:justify-around items-center w-10/12 sm:w-3/4 lg:w-1/2 flex-grow m-4 gap-3 text-xs tracking-wider uppercase'
        ref={ref}>
        {/* <div className='m-4 grid grid-cols-2 sm:grid-cols-3 gap-6'> */}
        {props.icons.map((icon, index) => (
          <motion.span
            key={`icon-${index}`}
            className='group flex flex-col items-center text-center'
            variants={boxVariants}
            initial='hidden'
            animate={controls}
            whileHover='hover'
            custom={index}>
            {icon.img}
            <p className='text-light font-semibold my-2 '>{icon.name}</p>
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
