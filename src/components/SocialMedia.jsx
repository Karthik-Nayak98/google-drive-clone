import React from 'react';

const SocialMedia = ({ icons }) => {
  const { link, img } = icons;
  return (
    <a
      className='w-10 h-10 bg-darker rounded-full inline-flex items-center justify-center hover:bg-primary'
      href={link}>
      {img}
    </a>
  );
};

export default SocialMedia;
