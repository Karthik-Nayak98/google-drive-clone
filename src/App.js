import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';
import ParticleConfig from './config/particleConfig';

function App() {
  return (
    <main className='bg-dark font-mono'>
      <Navbar />
      <div className='absolute'>
        <Particles height='100vh' width='100vw' params={ParticleConfig} />
      </div>
      <HomePage />
    </main>
  );
}

export default App;
