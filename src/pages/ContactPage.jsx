import React, { useState } from 'react';
import Header from '../components/Header';
import Send from '../icons/send';

const Contact = () => {
  const [values, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  let error = {
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: '',
  };
  const [errors, setError] = useState(error);

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...values,
      [name]: value,
    });
  }

  function validate(values) {
    const result = /^[A-Za-z]{1}[a-zA-Z0-9_+%$.]@[a-z]+\.[a-z]{2,}$/i.test(
      values.email
    );

    if (!values.name) error.nameError = 'Name required';
    if (!values.email) error.emailError = 'Email required';
    else if (result) error.emailError = 'Invalid email';
    if (!values.subject) error.subjectError = 'Subject required';
    if (!values.message) error.messageError = 'Message required';
    return error;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError(validate(values));
    console.log(errors);
  }

  return (
    <section
      id='contact'
      className='flex flex-col justify-cemter items-center my-9 mx-3 sm:mx-4 md:mx-6 lg:mx-20'>
      <Header name='Contact' />
      <div className='flex flex-col lg:flex-row justify-between  items-center lg:justify-around m-4 gap-5 lg:gap-0 w-full'>
        <p className='text-slate text-center  w-full lg:w-3/12 max-w-xl mx-4 text-sm sm:text-base'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          officia sed libero voluptates. Eos ipsum at, enim non, et voluptas,
          eum tempore pariatur debitis doloremque maxime consequuntur sequi
          ipsam eius distinctio commodi illo.
        </p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-1 justify-center w-full lg:w-8/12 max-w-2xl md:justify-around m-2'>
          <div className='flex flex-col lg:flex-row justify-between lg:justify-start gap-1 lg:gap-5 w-full'>
            <div className='lg:w-1/2'>
              <label className='text-slate text-xs tracking-wider capitalize block my-2'>
                name:
              </label>
              <input
                className='border-primary border-2 outline-none p-1 w-full rounded bg-dark text-light'
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <p>{errors.nameError}</p>
            <div className='lg:w-1/2'>
              <label className='text-slate text-xs tracking-wider capitalize block my-2'>
                email:
              </label>
              <input
                className='border-primary border-2 outline-none p-1 w-full rounded bg-dark text-light'
                type='text'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <p>{errors.emailError}</p>
          </div>

          <div>
            <label className='text-slate text-xs tracking-wider capitalize block my-2'>
              subject:
            </label>
            <input
              className='border-primary border-2 outline-none p-1 w-full rounded bg-dark text-light '
              type='text'
              value={values.subject}
              onChange={handleChange}
              name='subject'
            />
          </div>
          <p>{errors.subjectError}</p>
          <div>
            <label
              className='text-slate text-xs tracking-wider capitalize block my-2'
              htmlFor='message'>
              message:
            </label>
            <textarea
              className='border-primary border-2 outline-none p-1 w-full h-32 rounded mb-2 bg-dark text-light'
              value={values.message}
              onChange={handleChange}
              name='message'
            />
            <p>{errors.messageError}</p>
          </div>
          <button
            type='submit'
            className='flex justify-center items-center text-light hover:text-light text-center px-2 py-2 hover:border-opacity-0 hover:bg-opacity-80 hover:bg-primary border-2 border-primary rounded-md transition ease-out duration-500 w-40 text-xs space-x-3 uppercase font-semibold'>
            <span>Send message</span>
            <Send />
          </button>
          {/* <Button name='send message' /> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
