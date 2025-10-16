import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();
  
  return (
    <>
      <SEO 
        title="Our Services - One Axis Solutions | Web Development, AI & Interior Design"
        description="Explore our comprehensive services: Web Development, Mobile App Development, AI Solutions, SaaS Development, and Creative Interior Design. Transform your business with One Axis Solutions."
        keywords="web development services, mobile app development, AI solutions, SaaS development, interior design services, software development, One Axis Solutions"
        canonicalUrl="https://oneaxissolutions.com/services"
        ogImage="/services-og-image.jpg"
      />
      <Navbar />
      <div className={`services-page ${isDark ? 'dark' : ''}`}>
        <section className="services-hero">
          <div className="container">
            <h1>Our Services</h1>
            <p>Comprehensive solutions for your digital transformation</p>
          </div>
        </section>

        <section className="services-content">
          <div className="container">
            <h2>What We Offer</h2>
            
            {/* Web Development */}
            <div className="service-item">
              <h3>Web Development</h3>
              <p>
                Build modern, responsive, and high-performance websites using the latest technologies.
                From static sites to complex web applications, we deliver exceptional results.
              </p>
            </div>

            {/* Mobile Development */}
            <div className="service-item">
              <h3>Mobile App Development</h3>
              <p>
                Create native and cross-platform mobile applications that provide seamless 
                user experiences across iOS and Android devices.
              </p>
            </div>

            {/* AI Solutions */}
            <div className="service-item">
              <h3>AI Solutions</h3>
              <p>
                Leverage artificial intelligence and machine learning to automate processes,
                gain insights, and transform your business operations.
              </p>
            </div>

            {/* SaaS Development */}
            <div className="service-item">
              <h3>SaaS Development</h3>
              <p>
                Design and develop scalable Software-as-a-Service platforms that drive 
                recurring revenue and deliver value to your customers.
              </p>
            </div>

            {/* Interior Design */}
            <div className="service-item">
              <h3>Interior Design</h3>
              <p>
                Transform spaces with our creative interior design services. We blend 
                aesthetics with functionality to create inspiring environments.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
