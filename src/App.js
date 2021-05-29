import React, { useState, useEffect } from 'react';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Navbar from './components/Navbar';
import Skills from './pages/SkillsPage';
import Project from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
import Footer from './components/Footer';
import icons from './helper/icons';
import Particles from 'react-particles-js';
import ParticleConfig from './config/particleConfig';
import projects from './helper/project';
import './style.css';

function App() {
  const [loading, setLoading] = useState(true);

  function fakePromise() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  useEffect(() => {
    fakePromise().then(() => {
      const loader = document.querySelector('.loading');
      if (loader) {
        loader.remove();
        setLoading(!loading);
      }
    });
  });

  if (loading) {
    return null;
  }

  return (
    <main className='rootComponent bg-dark font-mono'>
      <Navbar />
      <div className='absolute'>
        <Particles height='100vh' width='100vw' params={ParticleConfig} />
      </div>
      <Home />
      <About />
      <Skills icons={icons} />
      <Project projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
