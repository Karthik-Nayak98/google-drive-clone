import React from 'react';

function Header(props) {
  return (
    <h2 className='text-3xl text-center text-primary sm:text-4xl font-semibold'>
      {props.name}
    </h2>
  );
}

export default Header;
