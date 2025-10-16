import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  
  return (
    <>
      <SEO 
        title="Contact Us - One Axis Solutions | Get in Touch"
        description="Get in touch with One Axis Solutions for web development, mobile apps, AI solutions, and interior design services. Let's discuss your project today."
        keywords="contact One Axis Solutions, software development inquiry, interior design consultation, web development contact, project inquiry"
        canonicalUrl="https://oneaxissolutions.com/contact"
        ogImage="/contact-og-image.jpg"
      />
      <Navbar />
      <div className={`contact-page ${isDark ? 'dark' : ''}`}>
        <section className="contact-hero">
          <div className="container">
            <h1>Get In Touch</h1>
            <p>Let's discuss your project and bring your vision to life</p>
          </div>
        </section>

        <section className="contact-content">
          <div className="container">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <p>Email: info@oneaxissolutions.com</p>
              {/* Add more contact details */}
            </div>

            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
