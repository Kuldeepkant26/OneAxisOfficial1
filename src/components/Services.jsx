import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaArrowRight } from 'react-icons/fa';
import '../css/Services.css';

const Services = () => {
  const { isDark } = useTheme();

  const services = [
    {
      id: 1,
      category: 'INTERIOR DESIGN',
      title: 'Transform Your Living Spaces',
      description: 'Experience the art of sophisticated interior design where luxury meets functionality. We create timeless spaces that reflect your personality and elevate your lifestyle through meticulous attention to detail and premium craftsmanship.',
      features: [
        'Luxury Design',
        'Custom Solutions',
        'Modern Aesthetics',
        'Complete Renovation'
      ],
      images: [
        { id: 1, size: 'large' },
        { id: 2, size: 'small' },
        { id: 3, size: 'small' },
        { id: 4, size: 'medium' },
        { id: 5, size: 'medium' }
      ],
      layout: 'left'
    },
    {
      id: 2,
      category: 'WEB DEVELOPMENT',
      title: 'Build Your Digital Presence',
      description: 'Experience cutting-edge web development where innovation meets functionality. We craft powerful digital solutions that elevate your brand and drive business growth through modern technologies and exceptional user experiences.',
      features: [
        'Responsive Design',
        'Modern Tech Stack',
        'SEO Optimized',
        'AI Powered Applications'
      ],
      images: [
        { id: 1, type: 'phone' },
        { id: 2, type: 'screen-1' },
        { id: 3, type: 'screen-2' }
      ],
      layout: 'right'
    },
    {
      id: 3,
      category: 'MOBILE DEVELOPMENT',
      title: 'Create Your Mobile Experience',
      description: 'Develop powerful mobile applications that engage users and drive results. We build native iOS and Android apps with modern frameworks, delivering seamless experiences across all devices with stunning design and robust performance.',
      features: [
        'Native iOS Development',
        'Android Applications',
        'Cross-Platform Solutions',
        'UI/UX Optimization'
      ],
      images: [
        { id: 1, color: 'purple' },
        { id: 2, color: 'pink' },
        { id: 3, color: 'blue' },
        { id: 4, color: 'cyan' }
      ],
      layout: 'left'
    }
  ];

  return (
    <div className={`services-wrapper ${isDark ? 'dark' : ''}`}>
      {services.map((service) => (
        <section 
          key={service.id} 
          className={`service-section ${service.layout === 'right' ? 'reverse' : ''}`}
        >
          <div className="service-container">
            {/* Content Side */}
            <div className="service-content">
              <div className="service-category">{service.category}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className="service-btn">
                LEARN MORE <FaArrowRight />
              </button>
            </div>

            {/* Images Side */}
            <div className="service-images">
              {service.id === 1 && (
                <div className="interior-grid">
                  <div className="interior-img main">
                    <div className="img-placeholder">
                      <span className="img-label">Modern Living</span>
                    </div>
                  </div>
                  <div className="interior-img top-right-1">
                    <div className="img-placeholder"></div>
                  </div>
                  <div className="interior-img top-right-2">
                    <div className="img-placeholder"></div>
                  </div>
                  <div className="interior-img bottom-left">
                    <div className="img-placeholder"></div>
                  </div>
                  <div className="interior-img bottom-right">
                    <div className="img-placeholder"></div>
                  </div>
                </div>
              )}

              {service.id === 2 && (
                <div className="web-grid">
                  <div className="web-circle">
                    <div className="web-phone">
                      <div className="phone-placeholder"></div>
                    </div>
                  </div>
                  <div className="web-screens">
                    <div className="web-screen screen-1">
                      <div className="screen-placeholder"></div>
                    </div>
                    <div className="web-screen screen-2">
                      <div className="screen-placeholder"></div>
                    </div>
                  </div>
                </div>
              )}

              {service.id === 3 && (
                <div className="mobile-grid">
                  <div className="mobile-card card-1">
                    <div className="mobile-mockup">
                      <div className="mockup-screen purple-screen"></div>
                    </div>
                  </div>
                  <div className="mobile-card card-2">
                    <div className="mobile-mockup">
                      <div className="mockup-screen pink-screen"></div>
                    </div>
                  </div>
                  <div className="mobile-card card-3">
                    <div className="mobile-mockup">
                      <div className="mockup-screen blue-screen"></div>
                    </div>
                  </div>
                  <div className="mobile-card card-4">
                    <div className="mobile-mockup">
                      <div className="mockup-screen cyan-screen"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
