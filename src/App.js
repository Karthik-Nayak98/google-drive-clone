import React from 'react';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Navbar from './components/Navbar';
import Skills from './pages/SkillsPage';
import Project from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
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
      <Contact />
    </main>
  );
}

export default App;
