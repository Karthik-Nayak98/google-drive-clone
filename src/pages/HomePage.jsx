import Typical from 'react-typical';

const Home = () => {
  return (
    <section
      id='home'
      className='space-y-16Y
     flex flex-col text-center items-center py-40 h-screen space-y-5'>
      <header className='text-light  space-y-5'>
        <p className='text-2xl md:text-3xl'>Hello, I'm</p>
        <h1 className='font-medium tracking-wider text-5xl md:text-6xl uppercase'>
          Karthik Nayak
        </h1>
      </header>

      <article className='text-center text-primary text-2xl md:text-3xl mt-3'>
        <span className=''>I am a </span>
        <Typical
          steps={[
            'Web Developer',
            2000,
            'Open Sourcer',
            2000,
            'Linux Enthusiast',
            2000,
          ]}
          loop={Infinity}
          wrapper='strong'
        />
      </article>

      <div className='py-10 flex flex-col justify-center items-center hover:opacity-80 cursor-pointer'>
        <span className='w-6 h-10 border-secondary border-2 rounded-3xl relative flex justify-center'>
          <span className='bg-secondary w-1 h-1 rounded-full animate-fade absolute top-2'></span>
        </span>

        <span className='flex justify-center -space-x-2'>
          <span className='w-0.5 h-3 my-3 bg-secondary border-secondary animate-move'></span>
          <span className='w-0.5 h-3 my-3  bg-secondary border-secondary animate-beat'></span>
        </span>
        <span className='flex justify-center -space-x-2 -my-7'>
          <span className='w-0.5 h-3 my-3 bg-secondary border-secondary animate-move'></span>
          <span className='w-0.5 h-3 my-3  bg-secondary border-secondary animate-beat'></span>
        </span>
        {/* <span className='text-secondary text-xs my-3 animate-pulse'>
          Scroll down
        </span> */}
      </div>
    </section>
  );
};

export default Home;
