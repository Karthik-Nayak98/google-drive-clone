export const navItemVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    delay: 1,
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, ease: 'easeInOut' },
  },
};

export const slideVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const leftVariant = {
  hidden: { opacity: 0, x: -500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      default: {
        duration: 1,
        ease: 'easeIn',
        type: 'spring',
        stiffness: 50,
      },
    },
  },
};

export const rightVariant = {
  hidden: { opacity: 0, x: 500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      default: {
        duration: 1,
        ease: 'easeIn',
        type: 'spring',
        stiffness: 50,
      },
    },
  },
};
