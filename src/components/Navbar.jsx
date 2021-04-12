import LOGO from '../icons/logo';

const Navbar = () => {
  return (
    <nav className='bg-opacity-95 shadow-lg h-16 w-full flex justify-between sm:px-9 px-4 items-center'>
      <LOGO />
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='sm:hidden h-10 w-10 text-primary '
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 text-primary '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
            <a className='pl-1 ' href='#'>
              Home
            </a>
          </li>
          <li className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 text-primary'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <a className='pl-1' href='#'>
              About
            </a>
          </li>
          <li className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 text-primary'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <a className='pl-1' href='#'>
              Work
            </a>
          </li>
          <li className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 text-primary'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <a className='pl-1' href='#'>
              Contact
            </a>
          </li>
        </ul>

        <a
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
        </a>

        {/* <button className='text-primary hover:text-light text-center w-20 px-3 py-1 hover:border-opacity-0 hover:bg-opacity-80 hover:bg-primary border-primary font-bold rounded-md transition ease-out duration-700 ring-2 ring-primary ring-opacity-80 '>
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
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
