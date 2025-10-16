import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import InteriorDesign from '../components/InteriorDesign';
import InteriorShowcase from '../components/InteriorShowcase';
import Services from '../components/Services';
import TestSection from '../components/TestSection';
import WebSaaSDev from '../components/WebSaaSDev';
import AISolutions from '../components/AISolutions';
import MobileDev from '../components/MobileDev';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';
import '../css/Home.css';

const Home = () => {
  const { isDark } = useTheme();
  
  return (
    <>
      <SEO 
        title="One Axis Solutions - Software Development & Interior Design Company"
        description="One Axis Solutions is a leading software development and interior design company offering web development, mobile apps, AI solutions, SaaS development, and creative interior design services."
        keywords="One Axis Solutions, software development company, interior design company, web development, mobile app development, AI solutions, SaaS development, creative design"
        canonicalUrl="https://oneaxissolutions.com/"
        ogImage="/og-image.jpg"
      />
      <Navbar />
      <div className={`home-page ${isDark ? 'dark' : ''}`}>
        <Hero />
        <AboutUs />
        <InteriorShowcase />
        <MobileDev />
        <WebSaaSDev />
        <AISolutions />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default Home;