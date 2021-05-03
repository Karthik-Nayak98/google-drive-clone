import React from 'react';
import image from '../assets/karthik.png';
import Header from '../components/Header';

const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col sm:justify-center items-center my-10 mx-4 sm:mx-20'>
      <Header name='About Me' />
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <img className='sm:w-64 m-4 w-56' src={image} alt='Karthik' />
        <div className='m-3 text-light leading-7 text-sm'>
          <p>
            Hello! I am
            <em>
              <strong className='text-primary'> Karthik Nayak</strong>
            </em>
            , a web developer based from India. My aim is writing clean,
            efficient and maintainable code. I currently work in
            <strong> Oracle Cloud</strong> as a Programmer Analyst.
          </p>
          <p>
            My interest for coding started back in 2016 when I wrote some small
            programs in C. Gradually, I got interest in Web Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
