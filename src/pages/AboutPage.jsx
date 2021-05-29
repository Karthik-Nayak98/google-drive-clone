import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from '../assets/karthik.png';
import Header from '../components/Header';
import { leftVariant, rightVariant } from '../helper/variants';

const About = () => {
  const controls = useAnimation();
  const [aboutRef, inView] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      id='about'
      className='flex flex-col sm:justify-center items-center my-10 mx-4 sm:mx-20'>
      <Header name='About Me' />
      <div
        className='flex flex-col lg:flex-row items-center justify-center'
        ref={aboutRef}>
        <motion.img
          className='sm:w-64 m-4 w-56 rounded-lg shadow-md'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          variants={leftVariant}
          initial='hidden'
          animate={controls}
          src={image}
          alt='Karthik'
        />
        <motion.div
          className='m-3 text-light leading-7 text-sm text-center sm:text-left'
          variants={rightVariant}
          initial='hidden'
          animate={controls}>
          <p>
            Hello! I am
            <em>
              <strong className='text-primary'> Karthik Nayak</strong>
            </em>
            , a web developer based from India. My aim is writing clean,
            efficient and maintainable code. I currently work in
            <strong className='text-primary'> Oracle Cloud</strong> as a
            <strong className='text-primary'> Programmer Analyst</strong>. I got
            the taste of programming in 2016 when I started to write some small
            programs using C. Gradually, I developed interest in Web Development
            which still continues.
          </p>
          <p>I spend my spare time by reading books or listening to music.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
