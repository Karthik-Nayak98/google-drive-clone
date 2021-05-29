import { NavHashLink as Link } from 'react-router-hash-link';
import Typical from 'react-typical';
import scrollWithOffset from '../helper/scroll';
import { motion } from 'framer-motion';

const Home = () => {
  const homeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const homeItemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      delay: 1,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.section
      id='home'
      className='space-y-16 flex flex-col text-center items-center py-40 h-screen space-y-5'
      variants={homeVariants}
      initial='hidden'
      animate='visible'>
      <motion.header
        className='text-light space-y-5'
        variants={homeItemVariants}
        initial='hidden'
        animate='visible'>
        <motion.p className='text-2xl md:text-3xl' variants={homeItemVariants}>
          Hello, I'm
        </motion.p>
        <motion.h1
          className='font-medium tracking-wider text-5xl md:text-6xl uppercase'
          variants={homeItemVariants}>
          Karthik Nayak
        </motion.h1>
      </motion.header>

      <motion.article
        className='text-center text-primary text-2xl md:text-3xl mt-3'
        variants={homeItemVariants}>
        <span className=''>I am a </span>
        <Typical
          steps={[
            'Web Developer',
            2000,
            'Open Sourcer',
            2000,
            'Linux Lover',
            2000,
          ]}
          loop={Infinity}
          wrapper='strong'
        />
      </motion.article>

      <Link
        smooth
        to='#about'
        scroll={scrollWithOffset}
        variants={homeItemVariants}>
        <span
          className='w-6 h-10 border-secondary border-2 rounded-3xl relative flex justify-center'
          data-value='scroll'>
          <span className='bg-secondary w-1 h-1 rounded-full animate-fade absolute top-2'></span>
        </span>

        <span className='flex justify-center -space-x-2' data-value='scroll'>
          <span className='w-0.5 h-3 my-3 bg-secondary border-secondary animate-move'></span>
          <span className='w-0.5 h-3 my-3  bg-secondary border-secondary animate-beat'></span>
        </span>
        <span
          className='flex justify-center -space-x-2 -my-7'
          data-value='scroll'>
          <span className='w-0.5 h-3 my-3 bg-secondary border-secondary animate-move'></span>
          <span className='w-0.5 h-3 my-3  bg-secondary border-secondary animate-beat'></span>
        </span>
      </Link>
    </motion.section>
  );
};

export default Home;

// <a
//       href='#about'
//       onClick={handleClick}
//       className='lg:py-12 flex flex-col justify-center items-center hover:opacity-80 cursor-pointer'
//       data-value='scroll'></a>
