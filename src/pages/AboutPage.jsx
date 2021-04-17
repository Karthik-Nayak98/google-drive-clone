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
        <p className='m-3 text-light leading-7 text-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
          architecto, ex eligendi quo in culpa veniam rerum cum delectus,
          accusantium velit quasi eum sequi repellat molestias praesentium alias
          eaque animi! Illum dolore dignissimos, nam, maiores accusantium,
          debitis adipisci corrupti nulla sint consectetur aliquam earum modi
          minima veritatis non autem necessitatibus id delectus aut. Eos esse et
          officiis consectetur fuga, quae delectus labore itaque sed ab
          veritatis necessitatibus dolorem iste quidem accusamus fugit
          asperiores commodi hic maxime velit, aut libero. Dolores optio nihil
          reprehenderit facilis eum sequi illo repellat, maiores, minima est
          placeat architecto asperiores excepturi nam dolorem, obcaecati
          eligendi porro?
        </p>
      </div>
    </section>
  );
};

export default About;
