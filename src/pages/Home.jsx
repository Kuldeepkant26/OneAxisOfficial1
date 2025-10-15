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
import { useTheme } from '../context/ThemeContext';
import '../css/Home.css';

const Home = () => {
  const { isDark } = useTheme();
  
  return (
    <>
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