import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Abdullah</span>
          <span className="logo-dot">.</span>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <a onClick={() => scrollToSection('home')} className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('about')} className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')} className="navbar-link">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('skills')} className="navbar-link">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')} className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
