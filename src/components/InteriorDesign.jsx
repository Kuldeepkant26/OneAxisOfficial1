import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../css/InteriorDesign.css';

const InteriorDesign = () => {
  const { isDark } = useTheme();

  return (
    <section className={`interior-section ${isDark ? 'dark' : ''}`} id="interior">
      <div className="interior-container">
        {/* Background Image Layer */}
        <div className="interior-bg-image"></div>
        
        {/* Glassmorphic Content Card */}
        <div className="interior-content-card">
          <div className="interior-card-inner">
            <h2 className="interior-title">
              Best Interior Design
              <br />
              For Your <span className="gradient-accent">Home</span>
            </h2>
            
            <p className="interior-description">
              Transform your living spaces into stunning sanctuaries with our expert interior design services. 
              From modern minimalism to classic elegance, we bring your vision to life with meticulous 
              attention to detail and premium craftsmanship.
            </p>
            
            <button className="interior-cta">
              EXPLORE NOW
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="interior-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesign;
