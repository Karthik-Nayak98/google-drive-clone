import React from 'react';
import GITHUB from '../icons/github';
import LINK from '../icons/link';
import Header from '../components/Header';

function Project(props) {
  return (
    <section
      id='work'
      className='flex flex-col sm:justify-center items-center my-12 border-2 mx-4 sm:mx-16'>
      <Header name='Projects' />
      <section className='flex flex-wrap gap-6 justify-center my-8 cursor-pointer'>
        {props.projects.map((project) => (
          <article
            key={project.link}
            className='relative shadow-2xl transition ease-in duration-300 w-72 h-80 transform hover:scale-105'>
            <div className='absolute inset-0 z-10 flex transition duration-200 ease-in opacity-0 hover:opacity-100'>
              <div className='absolute inset-0 bg-dark opacity-80'></div>
              <div className='mx-2 text-slate z-10 self-center text-center uppercase tracking-widest text-sm'>
                <h3 className='text-primary font-semibold text-2xl'>
                  {project.name}
                </h3>
                <p className='text-slate font-semibold'>
                  {project.description}
                </p>
                <span className='flex gap-2 items-center justify-center mt-5'>
                  <a href={project.github}>
                    <GITHUB
                      className='w-5 h-5 transform hover:scale-110 hover:text-secondary'
                      fill='#E5E5E5'
                    />
                  </a>
                  <a href={project.link}>
                    <LINK />
                  </a>
                </span>
              </div>
            </div>
            <img
              className='w-72 h-80 object-cover'
              src={project.img}
              alt={project.name}
            />
          </article>
        ))}
      </section>
    </section>
  );
}

export default Project;
