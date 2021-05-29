import React, { useState, useEffect, useCallback } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import Send from '../icons/send';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { leftVariant, rightVariant } from '../helper/variants';

const Contact = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formEmpty, setFromEmpty] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  let sentMessage = 'Message Sent!!';
  const formFillMessage = 'Please fill all the fields?';

  const [values, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState({
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleBlur = (field) => (event) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...values,
      [name]: value,
    });
  }

  const validate = useCallback(() => {
    const result = /^[A-Za-z]{1}[a-zA-Z0-9_+%$.]+@[a-z]+\.[a-z]{2,}$/i.test(
      values.email
    );

    const error = {
      nameError: '',
      emailError: '',
      subjectError: '',
      messageError: '',
    };

    if (touched.name && !values.name)
      error.nameError = 'Please enter your name';

    if (touched.email && !values.email)
      error.emailError = 'Please enter your email';
    else if (touched.email && !result)
      error.emailError = 'Please enter a valid email';

    if (touched.subject && !values.subject)
      error.subjectError = 'Please enter your subject';

    if (touched.message && !values.message)
      error.messageError = 'Please write some message';
    // setError(error);
    return error;
  }, [touched, values]);

  useEffect(() => {
    let error = validate();
    setError(error);
  }, [touched, validate]);

  useEffect((sentMessage) => {
    let timeout;

    timeout = setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    return () => clearTimeout(timeout);
  });

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    if (!values.name || !values.email || !values.message || !values.subject) {
      setFromEmpty(true);
    } else {
      setFromEmpty(false);
    }

    if (
      !error.nameError &&
      !error.emailError &&
      !error.subjectError &&
      !error.messageError
    ) {
      setIsError(true);
      // console.log('No Errors');
      emailjs
        .sendForm(
          'service_k6uryid',
          'template_e7bm0ua',
          event.target,
          'user_A9hZY5UQGb8pWLkIOvRDn'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setState({ name: '', email: '', subject: '', message: '' });
    } else {
      setIsError(false);
      // console.log('Errors');
    }
  }

  return (
    <section
      id='contact'
      className='flex flex-col justify-cemter items-center my-9 mx-3 sm:mx-4 md:mx-6 lg:mx-20'>
      <Header name='Contact' id='contact' />
      <div
        className='flex flex-col lg:flex-row justify-between  items-center lg:justify-around m-4 gap-5 lg:gap-0 w-full'
        ref={ref}>
        <motion.div
          className='w-full lg:w-3/12 max-w-xl mx-4 text-sm sm:text-base text-center'
          variants={leftVariant}
          initial='hidden'
          animate={controls}>
          <h2 className='text-primary font-semibold text-xl mb-2'>
            Please Keep in Touch
          </h2>
          <p className='text-slate text-center w-full max-w-xl text-xs sm:text-sm'>
            If you have any questions feel free to contact me. I would try my
            best to help you. I am looking for some opportunities in the web
            development space & if you have anything hit me up!!
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className='flex flex-col gap-1 justify-center w-full lg:w-8/12 max-w-2xl md:justify-around m-2'
          variants={rightVariant}
          initial='hidden'
          animate={controls}>
          {isError && !formEmpty && isSubmitted ? (
            <p style={{ color: '#7FFF00' }} className='text-xs text-center'>
              {sentMessage}
            </p>
          ) : null}
          {formEmpty && isSubmitted ? (
            <p className='text-red-500 text-xs text-center'>
              {formFillMessage}
            </p>
          ) : null}

          <div className='flex flex-col lg:flex-row justify-between lg:justify-start gap-1 lg:gap-5 w-full'>
            <div className='lg:w-1/2'>
              <label className='text-slate text-xs tracking-wider capitalize block my-2'>
                name:
              </label>
              <motion.input
                className='text-xs border-primary border outline-none p-2 w-full rounded bg-dark text-light'
                type='text'
                name='name'
                autoComplete='off'
                value={values.name}
                placeholder='eg: John Doe'
                onBlur={handleBlur('name')}
                onChange={handleChange}
                whileFocus={{ boxShadow: '0px 0px 6px #FF9F1C' }}
              />
              <p className='text-xs text-red-500 mt-2'>{error.nameError}</p>
            </div>
            <div className='lg:w-1/2'>
              <label className='text-slate text-xs tracking-wider capitalize block my-2'>
                email:
              </label>
              <motion.input
                className='text-xs border-primary border outline-none p-2 w-full rounded bg-dark text-light'
                type='text'
                name='email'
                placeholder='eg: test@gmail.com'
                value={values.email}
                autoComplete='off'
                onBlur={handleBlur('email')}
                onChange={handleChange}
                whileFocus={{ boxShadow: '0px 0px 6px #FF9F1C' }}
              />
              <p className='text-xs pl-2 text-red-600 mt-2'>
                {error.emailError}
              </p>
            </div>
          </div>
          <div>
            <label className='text-slate text-xs tracking-wider capitalize block my-2'>
              subject:
            </label>
            <motion.input
              className='text-xs border-primary border outline-none p-2 w-full rounded bg-dark text-light'
              type='text'
              value={values.subject}
              placeholder='Subject'
              autoComplete='off'
              onBlur={handleBlur('subject')}
              onChange={handleChange}
              name='subject'
              whileFocus={{ boxShadow: '0px 0px 6px #FF9F1C' }}
            />
            <p className='text-xs text-red-600 mt-2'>{error.subjectError}</p>
          </div>
          <div className='mb-1'>
            <label
              className='text-slate text-xs tracking-wider capitalize block my-2'
              htmlFor='message'>
              message:
            </label>
            <motion.textarea
              className='text-xs border-primary border outline-none p-2 w-full h-32 rounded bg-dark text-light'
              value={values.message}
              placeholder='Some message here...'
              onBlur={handleBlur('message')}
              autoComplete='off'
              onChange={handleChange}
              name='message'
              whileFocus={{ boxShadow: '0px 0px 6px #FF9F1C' }}
            />
            <p className='text-xs text-red-600'>{error.messageError}</p>
          </div>
          {/* if (error.name || error.email || error.subject || error.message)
            console.log(`disabled`)
           else
            console.log(`not disabled`) */}
          <motion.button
            type='submit'
            className='flex justify-center items-center text-primary text-center px-2 py-2 border border-primary rounded-md w-36 text-xs space-x-2 uppercase font-semibold'
            whileHover={{ boxShadow: '0px 0px 6px #FF9F1C' }}>
            <span>Send message</span>
            <Send />
          </motion.button>
          {/* <Button name='send message' /> */}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
