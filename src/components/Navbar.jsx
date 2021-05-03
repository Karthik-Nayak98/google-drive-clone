import LOGO from '../icons/logo';
import Button from '../components/Button';
import DOWNLOAD from '../icons/download';
// import { NavHashLink as Link } from 'react-router-hash-link';
import { navIcons } from '../helper/icons';

const Navbar = () => {
  const navbarHeight = 64;
  const element = document.querySelector('.nav-element');
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - navbarHeight, // Subtracting the height of navbar
    });

    if (window.innerWidth < window.innerHeight)
      element.classList.toggle('hidden');
  };

  const handleClick = () => {
    element.classList.toggle('hidden');
  };

  return (
    <nav className='fixed flex flex-wrap items-center justify-between z-20 bg-opacity-90 top-0 shadow-lg sm:px-9 px-4 py-2 w-full'>
      <a href='#home'>
        <LOGO />
      </a>
      <button onClick={handleClick}>
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
      <div className='nav-element hidden sm:flex flex-grow justify-between sm:w-4/5 max-w-xl w-full'>
        <ul className='text-slate flex flex-col sm:flex-row justify-between sm:w-80 md:w-96 max-w-xl'>
          {navIcons.map((icons) => (
            <li className='inline-flex flex-grow hover:text-light rounded items-center px-2 py-2'>
              {icons.img}
              <a className='pl-1' href={icons.link} onClick={handleScroll}>
                {icons.name}
              </a>
            </li>
          ))}
        </ul>
        <Button icon={<DOWNLOAD />} name='Resume' />
      </div>
    </nav>
  );
};

export default Navbar;

/* <Link className='pl-1' smooth to='#contact'>
                  Contact
                </Link> */

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

// <nav className='fixed flex flex-wrap justify-between items-center bg-dark z-20 bg-opacity-95 top-0 shadow-lg h-16 sm:px-9 px-4'>
//   <a href='#home'>
//     <LOGO />
//   </a>
//   <button>
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       className='h-9 w-9 text-primary inline-flex rounded ml-auto outline-none'
//       viewBox='0 0 24 24'
//       stroke='currentColor'>
//       <path
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         strokeWidth='2'
//         d='M4 6h16M4 12h16M4 18h16'
//       />
//     </svg>
//   </button>

//   <div
//     className='lg:inline-flex lg:flex-grow lg:w-auto w-full'
//     id='navigation'>
//     <ul className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto text-slate'>
//       <li>
//         <a
//           href='#home'
//           onClick={handleScroll}
//           className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center'>
//           <Home />
//           <span className='pl-1'>Home</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href='#home'
//           onClick={handleScroll}
//           className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center'>
//           <About />
//           <span className='pl-1'>About</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href='#home'
//           onClick={handleScroll}
//           className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center'>
//           <Work />
//           <span className='pl-1'>Work</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href='#home'
//           onClick={handleScroll}
//           className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center'>
//           <Contact />
//           <span className='pl-1'>Contact</span>
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>;
