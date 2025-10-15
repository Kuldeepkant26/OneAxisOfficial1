import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../css/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDark } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glassmorphism effect after 50px
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isDark ? 'dark' : ''} ${!visible ? 'navbar-hidden' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <h2>One Axis</h2>
          </div>
          
          <div className="navbar-menu">
            <Link to="/" className="nav-link">Home</Link>
            <div className="nav-dropdown">
              <a href="#services" className="nav-link">Our Services</a>
              <div className="dropdown-menu">
                <a href="#ai-solutions" className="dropdown-item">AI Solutions</a>
                <a href="#mobile-dev" className="dropdown-item">Mobile Development</a>
                <Link to="/interior" className="dropdown-item">Interior Designing</Link>
                <a href="#web-dev" className="dropdown-item">Website Development</a>
              </div>
            </div>
            <a href="#careers" className="nav-link">Careers</a>
          </div>

          <button 
            className={`menu-toggle ${sidebarOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      ></div>

      {/* Professional Sidebar */}
      <aside className={`professional-sidebar ${sidebarOpen ? 'active' : ''} ${isDark ? 'dark' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <div className="sidebar-brand-text">
              <h3>One Axis</h3>
              <p>Your Vision, Our Solutions</p>
            </div>
            <button className="sidebar-close" onClick={closeSidebar}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="sidebar-nav">
            <Link to="/" className="sidebar-link" onClick={closeSidebar}>
              <span className="link-number">01</span>
              <span className="link-text">Home</span>
            </Link>
            <a href="#services" className="sidebar-link" onClick={closeSidebar}>
              <span className="link-number">02</span>
              <span className="link-text">Our Services</span>
            </a>
            <Link to="/interior" className="sidebar-link" onClick={closeSidebar}>
              <span className="link-number">03</span>
              <span className="link-text">Interior Design</span>
            </Link>
            <a href="#careers" className="sidebar-link" onClick={closeSidebar}>
              <span className="link-number">04</span>
              <span className="link-text">Careers</span>
            </a>
            <a href="#contact" className="sidebar-link" onClick={closeSidebar}>
              <span className="link-number">05</span>
              <span className="link-text">Contact Us</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <div className="sidebar-social">
              <p className="social-title">Follow Us</p>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#twitter" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="sidebar-contact">
              <p className="contact-email">hello@oneaxis.com</p>
              <p className="contact-phone">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
