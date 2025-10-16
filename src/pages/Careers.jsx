import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const Careers = () => {
  const { isDark } = useTheme();
  
  return (
    <>
      <SEO 
        title="Careers - Join One Axis Solutions | Software & Design Jobs"
        description="Join our talented team at One Axis Solutions. Explore career opportunities in web development, mobile development, AI, and interior design. Build your future with us."
        keywords="careers, jobs, software developer jobs, interior designer jobs, web developer careers, mobile developer jobs, One Axis Solutions careers"
        canonicalUrl="https://oneaxissolutions.com/careers"
        ogImage="/careers-og-image.jpg"
      />
      <Navbar />
      <div className={`careers-page ${isDark ? 'dark' : ''}`}>
        <section className="careers-hero">
          <div className="container">
            <h1>Join Our Team</h1>
            <p>Build your career at One Axis Solutions</p>
          </div>
        </section>

        <section className="careers-content">
          <div className="container">
            <h2>Why Work With Us</h2>
            <p>
              At One Axis Solutions, we believe in fostering a culture of innovation, 
              creativity, and collaboration. Join our talented team and work on exciting 
              projects that make a real impact.
            </p>

            <h2>Current Openings</h2>
            <div className="job-listings">
              {/* Add job listings here */}
              <p>Check back soon for open positions or send your resume to careers@oneaxissolutions.com</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
