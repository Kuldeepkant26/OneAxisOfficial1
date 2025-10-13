import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import '../css/Hero.css';

const Hero = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <section className={`hero-section ${isDark ? 'dark' : ''}`}>
      <div className="hero-container">
        {/* Left Side - Vertical Text */}
        <div className="hero-sidebar-left">
          <div className="vertical-text">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <div className="theme-icon-wrapper">
                <BsSun className={`theme-icon sun ${!isDark ? 'active' : ''}`} />
                <BsMoon className={`theme-icon moon ${isDark ? 'active' : ''}`} />
              </div>
              <div className="toggle-switch">
                <div className={`toggle-track ${isDark ? 'dark' : ''}`}>
                  <div className="toggle-thumb"></div>
                </div>
                <div className="toggle-labels">
                  <span className={`toggle-option light ${!isDark ? 'active' : ''}`}>Light</span>
                  <span className={`toggle-option dark ${isDark ? 'active' : ''}`}>Dark</span>
                </div>
              </div>
            </button>
            <div className="divider-line"></div>
            <span className="scroll-text">Scroll</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative
            <br />
            <span className="hero-title-gradient">Solutions.</span>
          </h1>
          
          <p className="hero-description">
            We transform complex challenges into elegant solutions
            <br />
            using cutting-edge technology, creative design, and
            <br />
            innovative thinking.
          </p>

          <a href="#services" className="hero-cta">
            Know more <span className="arrow">→</span>
          </a>
        </div>

        {/* Right Side - Vertical Text */}
        <div className="hero-sidebar-right">
          <div className="vertical-text-right">
            <span className="social-text">Follow Us — Fb. / Ig. / Tw.</span>
          </div>
        </div>
      </div>

      {/* Bottom Curved Line - Outside container for full width */}
      <svg className="bottom-curve" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="url(#curveGradient)"/>
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a0826d" stopOpacity="0.4"/>
            <stop offset="50%" stopColor="#b89968" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#a0826d" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;

