import React, { useEffect } from 'react';
// import socialMedia from '../helper/socialMedia';
import Twitter from '../icons/twitter';
import StackOverflow from '../icons/stackoverflow';
import Linkedin from '../icons/linkedin';
import GITHUB from '../icons/github';
import SocialMedia from './SocialMedia';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideVariant } from '../helper/variants';

function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      className='flex flex-col justify-cemter items-center mx-3 sm:mx-4 md:mx-6 lg:mx-20'
      ref={ref}>
      <motion.div
        className='flex gap-3'
        variants={slideVariant}
        initial='hidden'
        animate={controls}>
        <SocialMedia
          icons={{
            link: 'https://twitter.com/KarthikNayak98',
            img: <Twitter />,
          }}
        />
        <SocialMedia
          icons={{
            link: 'www.linkedin.com/in/karthiknayak98',
            img: <Linkedin />,
          }}
        />
        <SocialMedia
          icons={{
            link: 'https://stackoverflow.com/users/9395755/karthiknayak98',
            img: <StackOverflow />,
          }}
        />
        <SocialMedia
          icons={{
            link: 'https://github.com/Karthik-Nayak98',
            img: <GITHUB className='w-6 h-6' fill='#FAF0CA' />,
          }}
        />
      </motion.div>
      <p className='text-light sm:text-sm text-xs mt-3 mb-2'>
        Designed & Built by
        <span className='text-primary font-semibold text-sm sm:text-base tracking-wide'>{` <Karthik Nayak/>`}</span>
      </p>
    </motion.section>
  );
}

export default Footer;
