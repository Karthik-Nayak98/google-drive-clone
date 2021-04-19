import LOGO from '../icons/logo';
import Button from '../components/Button';
import DOWNLOAD from '../icons/download';
import { NavHashLink as Link } from 'react-router-hash-link';
import Contact from '../icons/contact';
import Work from '../icons/work';
import Home from '../icons/home';
import About from '../icons/about';

const Navbar = () => {
  const navbarHeight = 64;
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - navbarHeight, // Subracting the height of navbar
    });
  };

  return (
    <nav className='fixed bg-dark z-20 bg-opacity-95 top-0 shadow-lg h-16 w-full flex justify-between sm:px-9 px-4 items-center'>
      <Link smooth to='#home'>
        <LOGO />
      </Link>
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='sm:hidden h-9 w-9 text-primary'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      <div className='hidden sm:flex sm:justify-between sm:w-3/4 max-w-lg'>
        <ul className='text-slate flex justify-between sm:w-80 max-w-md'>
          <li className='flex items-center'>
            <Home />
            <a className='pl-1' href='#home' onClick={handleScroll}>
              Home
            </a>
            {/* <Link className='pl-1' smooth to='#home'>
              Home
            </Link> */}
          </li>
          <li className='flex items-center'>
            <About />
            <a className='pl-1' href='#about' onClick={handleScroll}>
              About
            </a>
            {/* <Link className='pl-1' smooth to='#about'>
              About
            </Link> */}
          </li>
          <li className='flex items-center'>
            <Work />
            <a className='pl-1' href='#work' onClick={handleScroll}>
              Work
            </a>
            {/* <Link className='pl-1' smooth to='#work'>
              Work
            </Link> */}
          </li>
          <li className='flex items-center'>
            <Contact />
            <a className='pl-1' href='#contact' onClick={handleScroll}>
              Contact
            </a>
            {/* <Link className='pl-1' smooth to='#contact'>
              Contact
            </Link> */}
          </li>
        </ul>
        <Button icon={<DOWNLOAD />} name='Resume' />
      </div>
    </nav>
  );
};

export default Navbar;

// {
/* <a
          href='#'
          className='flex items-center text-primary hover:text-light text-center px-2 py-1 hover:border-opacity-0 hover:bg-opacity-80 hover:bg-primary border-2 border-primary font-bold rounded-md transition ease-out duration-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 pr-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
            />
          </svg>
          <span>Resume</span>
        </a> */
//}

//{
/* <button className='text-primary hover:text-light text-center w-20 px-3 py-1 hover:border-opacity-0 hover:bg-opacity-80 hover:bg-primary border-primary font-bold rounded-md transition ease-out duration-700 ring-2 ring-primary ring-opacity-80 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
            />
          </svg>
          Resume
        </button> */
//}
