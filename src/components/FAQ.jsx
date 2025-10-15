import React, { useState } from 'react';
import '../css/FAQ.css';
import { useTheme } from '../context/ThemeContext';

const FAQ = () => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does One Axis offer?",
      answer: "One Axis specializes in comprehensive digital solutions including AI-powered applications, custom web development, SaaS platforms, mobile app development, and premium interior design services. We combine cutting-edge technology with creative excellence to deliver transformative results."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A standard website typically takes 4-6 weeks, while complex SaaS platforms or AI solutions may require 3-6 months. We provide detailed timelines during our initial consultation and maintain transparent communication throughout the development process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer comprehensive post-launch support including maintenance, updates, bug fixes, and technical assistance. Our support packages are customizable to meet your specific needs, ensuring your digital solutions remain optimal and up-to-date."
    },
    {
      question: "What makes One Axis different from other agencies?",
      answer: "Our unique approach combines technical expertise with creative innovation. We don't just build solutions; we craft experiences. Our team stays ahead of industry trends, leveraging the latest technologies while maintaining a focus on user experience, scalability, and measurable business outcomes."
    },
    {
      question: "Can you work with my existing systems and technologies?",
      answer: "Yes, we excel at integration and migration projects. Whether you need to modernize legacy systems, integrate new features into existing platforms, or migrate to more efficient technologies, our team has the expertise to ensure seamless transitions with minimal disruption."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing models tailored to your needs - fixed-price projects, hourly rates, or retainer agreements. Each project receives a customized quote based on scope, complexity, and timeline. We provide transparent pricing with no hidden costs, ensuring you get maximum value for your investment."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`faq-section ${isDark ? 'dark' : ''}`} id="faq">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="badge-icon">💡</span>
            <span className="badge-text">FAQ</span>
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about our services. Can't find the answer you're looking for? 
            <a href="#contact" className="faq-contact-link"> Get in touch</a>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question-button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="faq-question">{faq.question}</span>
                <span className={`faq-icon ${activeIndex === index ? 'rotated' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className={`faq-answer-wrapper ${activeIndex === index ? 'expanded' : ''}`}>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="faq-cta">
          <div className="faq-cta-content">
            <h3 className="faq-cta-title">Still have questions?</h3>
            <p className="faq-cta-text">Our team is here to help you every step of the way.</p>
          </div>
          <button className="faq-cta-button">
            <span>Contact Us</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="faq-decoration faq-decoration-1"></div>
      <div className="faq-decoration faq-decoration-2"></div>
      <div className="faq-decoration faq-decoration-3"></div>
    </section>
  );
};

export default FAQ;
