import { useState, useEffect } from 'react';
import LOGO from '../icons/logo';
import Button from '../components/Button';
import DOWNLOAD from '../icons/download';
import { NavHashLink as Link } from 'react-router-hash-link';
import { navList } from '../helper/icons';
import scrollWithOffset from '../helper/scroll';
import { motion, useAnimation } from 'framer-motion';
import { navItemVariant } from '../helper/variants';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const navClass =
    'nav-element sm:flex flex-grow justify-between sm:w-4/5 max-w-xl w-full';

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const navVariants = {
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

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };
  const closeVariant = {
    opened: { rotate: -180 },
    closed: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <nav
      className='fixed flex flex-wrap items-center justify-between z-20 bg-opacity-90 shadow-lg sm:px-9 px-4 py-2 w-full'
      ref={ref}>
      <Link to='#home' smooth scroll={scrollWithOffset}>
        <LOGO />
      </Link>
      {!isOpen ? (
        <button onClick={handleClick} ref={ref}>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            className='sm:hidden h-9 w-9 text-primary'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <motion.path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16
            M4 12h12
            M4 18h8'
              variants={pathVariants}
              initial={!isOpen}
              animate='visible'
            />
          </motion.svg>
        </button>
      ) : (
        <button onClick={handleClick} ref={ref}>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            className='sm:hidden h-9 w-9 text-primary'
            viewBox='0 0 32 32'
            fill='currentColor'
            variants={closeVariant}
            initial='opened'
            animate={controls}>
            <path d='M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z' />
          </motion.svg>
        </button>
      )}
      <motion.div
        className={isOpen ? `${navClass}` : `hidden ${navClass}`}
        initial='hidden'
        variants={navVariants}
        animate='visible'
        ref={ref}>
        <motion.ul
          className='text-slate flex flex-col sm:flex-row justify-between sm:w-80 md:w-96 max-w-lg'
          initial='hidden'
          variants={navVariants}
          animate={controls}
          ref={ref}>
          {navList.map((icons) => (
            <motion.li
              key={icons.name}
              className='inline-flex flex-grow hover:text-light rounded justify-center items-center px-2 py-2 border-primary'
              variants={navItemVariant}>
              {icons.img}
              <Link
                className='pl-1'
                to={icons.link}
                smooth
                scroll={scrollWithOffset}>
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0px 0px 8px #FF9F1C',
                  }}
                  transition={{ type: 'spring', stiffness: 300, bounce: 1 }}>
                  {icons.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <Button icon={<DOWNLOAD />} name='Resume' />
      </motion.div>
    </nav>
  );
};

export default Navbar;
