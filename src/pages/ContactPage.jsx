import React from 'react';
import Header from '../components/Header';
import Send from '../icons/send';

const Contact = () => {
  return (
    <section className='flex flex-col justify-cemter items-center my-10 mx-3 sm:mx-4 md:mx-6 lg:mx-20'>
      <Header name='Contact' />
      <div className='flex flex-col lg:flex-row justify-between  items-center lg:justify-around m-4 gap-5 lg:gap-0 w-full'>
        <p className='text-slate text-center  w-full lg:w-3/12 max-w-xl mx-4 text-sm sm:text-base'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          officia sed libero voluptates. Eos ipsum at, enim non, et voluptas,
          eum tempore pariatur debitis doloremque maxime consequuntur sequi
          ipsam eius distinctio commodi illo.
        </p>
        <form className='flex flex-col gap-1  justify-center w-full lg:w-8/12 max-w-2xl md:justify-around m-2'>
          <div className='flex flex-col lg:flex-row justify-between lg:justify-start gap-1 lg:gap-5 w-full'>
            <div className='lg:w-1/2'>
              <label className='text-slate  text-xs tracking-wider capitalize block my-2'>
                name:
              </label>
              <input
                className='border-primary border-2 outline-none p-1 w-full  rounded bg-dark text-light'
                type='text'
                required={true}
              />
            </div>
            <div className='lg:w-1/2'>
              <label className='text-slate  text-xs tracking-wider capitalize block my-2'>
                email:
              </label>
              <input
                className='border-primary border-2 outline-none p-1 w-full rounded bg-dark text-light'
                type='email'
                required
              />
            </div>
          </div>

          <div>
            <label className='text-slate  text-xs tracking-wider capitalize block my-2'>
              subject:
            </label>
            <input
              className='border-primary border-2 outline-none p-1 w-full rounded bg-dark text-light '
              type='text'
            />
          </div>
          <div>
            <label
              className='text-slate text-xs tracking-wider capitalize block my-2'
              htmlFor='message'>
              message:
            </label>
            <textarea className='border-primary border-2 outline-none p-1 w-full h-32 rounded mb-2 bg-dark text-light '></textarea>
          </div>
          <a
            href='google.com'
            className='flex justify-center items-center text-light hover:text-light text-center px-2 py-2 hover:border-opacity-0 hover:bg-opacity-80 hover:bg-primary border-2 border-primary rounded-md transition ease-out duration-500 w-40 text-xs space-x-3 uppercase font-semibold'>
            <span>Send message</span>
            <Send />
          </a>
          {/* <Button name='send message' /> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
