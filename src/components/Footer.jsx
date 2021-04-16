import React from 'react';
import Linkedin from '../icons/linkedin';
import StackOverflow from '../icons/stackoverflow';
import Twitter from '../icons/twitter';
import GITHUB from '../icons/github';

function Footer() {
  return (
    <section className='flex flex-col justify-cemter items-center py-3 mx-3 sm:mx-4 md:mx-6 lg:mx-20'>
      <div className='flex gap-3 '>
        <Twitter />
        <Linkedin />
        <StackOverflow />
        <GITHUB className='w-6 h-6' fill='#FAF0CA' />
      </div>
      <p className='text-light sm:text-sm text-xs mt-3'>
        Designed & Built by
        <span className='text-primary font-semibold text-sm sm:text-base tracking-wide'>{` <Karthik Nayak/>`}</span>
      </p>
    </section>
  );
}

export default Footer;
