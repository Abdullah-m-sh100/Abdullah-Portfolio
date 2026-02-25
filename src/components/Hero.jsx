import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div 
        className="hero-gradient"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
        }}
      ></div>
      
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-line"></span>
            <span className="greeting-text">Hello, I'm</span>
          </div>
          
          <h1 className="hero-title">
            Abdullah M. <br />
            <span className="hero-title-highlight">Abu Shamla</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="subtitle-icon">{'<'}</span>
            <span className="subtitle-text">React.js Front-End Developer</span>
            <span className="subtitle-icon">{'/>'}</span>
          </div>
          
          <p className="hero-description">
            Crafting modern, responsive, and user-friendly web experiences with 
            clean code and elegant design solutions.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button className="btn btn-outline" onClick={scrollToProjects}>
              View Projects
            </button>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-indicator">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
