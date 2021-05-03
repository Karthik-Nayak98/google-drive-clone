import React from 'react';
// import socialMedia from '../helper/socialMedia';
import Twitter from '../icons/twitter';
import StackOverflow from '../icons/stackoverflow';
import Linkedin from '../icons/linkedin';
import GITHUB from '../icons/github';
import SocialMedia from './SocialMedia';
function Footer() {
  return (
    <section className='flex flex-col justify-cemter items-center mx-3 sm:mx-4 md:mx-6 lg:mx-20'>
      <div className='flex gap-3 '>
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
      </div>
      <p className='text-light sm:text-sm text-xs mt-3 mb-2'>
        Designed & Built by
        <span className='text-primary font-semibold text-sm sm:text-base tracking-wide'>{` <Karthik Nayak/>`}</span>
      </p>
    </section>
  );
}

export default Footer;
