import HTML from '../icons/html5';
import CSS from '../icons/css3';
import REACT from '../icons/react';
import JAVASCRIPT from '../icons/javascript';
import TAILWIND from '../icons/tailwindcss';
import GIT from '../icons/git';
import Home from '../icons/home';
import About from '../icons/about';
import Contact from '../icons/contact';
import Work from '../icons/work';

const icons = [
  {
    name: 'html5',
    img: <HTML />,
  },
  {
    name: 'css3',
    img: <CSS />,
  },
  {
    name: 'javascript',
    img: <JAVASCRIPT />,
  },
  {
    name: 'react',
    img: <REACT />,
  },
  {
    name: 'tailwind',
    img: <TAILWIND />,
  },
  {
    name: 'git',
    img: <GIT />,
  },
];

export const navList = [
  {
    name: 'Home',
    img: <Home />,
    link: '#home',
  },
  {
    name: 'About',
    img: <About />,
    link: '#about',
  },
  {
    name: 'Work',
    img: <Work />,
    link: '#work',
  },
  {
    name: 'Contact',
    img: <Contact />,
    link: '#contact',
  },
];

export default icons;
