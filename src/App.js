import React from 'react';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Navbar from './components/Navbar';
import Skills from './components/SkillsPage';
import Project from './components/ProjectsPage';
import icons from './helper/icons';
import Particles from 'react-particles-js';
import ParticleConfig from './config/particleConfig';
import projects from './helper/project';

function App() {
  return (
    <main className='bg-dark font-mono'>
      <Navbar />
      <div className='absolute'>
        <Particles height='100vh' width='100vw' params={ParticleConfig} />
      </div>
      <Home />
      <About />
      <Skills icons={icons} />
      <Project projects={projects} />
    </main>
  );
}

export default App;
