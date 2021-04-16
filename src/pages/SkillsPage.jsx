import React from 'react';
import Header from '../components/Header';
const Skills = (props) => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <Header name='Technical Skills' />
      <div className='flex flex-wrap justify-center sm:justify-around items-center w-10/12 sm:w-3/4 lg:w-1/2 flex-grow m-4 gap-3 text-xs tracking-wider uppercase'>
        {props.icons.map((icon) => (
          <span
            key={icon.name}
            className='group flex flex-col items-center  text-center transform transition  duration-500 ease-out hover:scale-105'>
            {icon.img}
            <p className='text-light font-semibold my-2 group-hover:text-primary'>
              {icon.name}
            </p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
