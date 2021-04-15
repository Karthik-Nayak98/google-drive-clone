import React from 'react';

const Button = (props) => {
  return (
    <a
      href='google.com'
      className='flex justify-center  items-center text-primary hover:text-light text-center px-2 py-1 hover:border-opacity-0 hover:bg-opacity-80 hover:bg-primary border-2 border-primary font-bold rounded-md transition ease-out duration-500'>
      {props.icon}
      <span>{props.name}</span>
    </a>
  );
};

export default Button;
