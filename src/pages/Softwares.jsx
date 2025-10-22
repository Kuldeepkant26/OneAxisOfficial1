import React from 'react';
import '../css/Softwares.css';
import Ballpit from '../../Reactbits/Ballpit/Ballpit';
import { HiLightningBolt } from 'react-icons/hi';
import { MdDesignServices, MdCloud } from 'react-icons/md';
import { FaShieldAlt, FaMobile, FaRobot } from 'react-icons/fa';

const Softwares = () => {
    return (
        <div className="softwares-container">
            {/* Section 1 - Hero Section */}
            <div className="section section-1" style={{ zIndex: 1 }}>
                <Ballpit 
                    colors={[0xff9a76, 0xff7e9a, 0x7e9aff]}
                    count={80}
                />
                
                {/* Hero Content */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Innovative Software <span className="gradient-text">Solutions</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        Transform your business with cutting-edge software development tailored to your needs
                    </p>
                    
                    <div className="hero-buttons">
                        <button className="btn-primary">
                            Get Started
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                        <button className="btn-secondary">View Services</button>
                    </div>
                </div>
            </div>

            {/* Section 2 - Services Content */}
            <div className="section section-2" style={{ zIndex: 2 }}>
                {/* Web & SaaS Development */}
                <div className="service-section web-saas-section">
                    <div className="service-content">
                        <h2>Web & SaaS Development</h2>
                        <p>Content coming soon...</p>
                    </div>
                </div>
                
                {/* Mobile Development */}
                <div className="service-section mobile-dev-section">
                    <div className="service-content">
                        <h2>Mobile Development</h2>
                        <p>Content coming soon...</p>
                    </div>
                </div>
                
                {/* AI Solutions */}
                <div className="service-section ai-solutions-section">
                    <div className="service-content">
                        <h2>AI Solutions</h2>
                        <p>Content coming soon...</p>
                    </div>
                </div>
                
                {/* Cloud Services */}
                <div className="service-section cloud-services-section">
                    <div className="service-content">
                        <h2>Cloud Services</h2>
                        <p>Content coming soon...</p>
                    </div>
                </div>
                
                {/* DevOps */}
                <div className="service-section devops-section">
                    <div className="service-content">
                        <h2>DevOps Solutions</h2>
                        <p>Content coming soon...</p>
                    </div>
                </div>
                
                {/* Custom Software */}
                <div className="service-section custom-software-section">
                    <div className="service-content">
                        <h2>Custom Software Development</h2>
                        <p>Content coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Softwares;
