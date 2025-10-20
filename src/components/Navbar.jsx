import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // Prevent body scroll when sidebar is open
        if (!isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        document.body.style.overflow = 'unset';
    };

    // Scroll implementation - targeting the home-container
    useEffect(() => {
        const controlNavbar = () => {
            // Get the scrollable container
            const scrollContainer = document.querySelector('.home-container');
            
            if (!scrollContainer) return;
            
            const currentScrollY = scrollContainer.scrollTop;
            
            // Always show navbar at the very top
            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide when scrolling down past 80px
            else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            }
            // Show when scrolling up
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        const scrollContainer = document.querySelector('.home-container');
        
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', controlNavbar);
            
            return () => {
                scrollContainer.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    // Cleanup body overflow on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <div className="logo-text">
                        <span className="logo-one">One</span>
                        <span className="logo-axis">Axis</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-menu">
                    <a href="#home" className="nav-link">Home</a>
                    
                    <div className="nav-dropdown">
                        <a href="#services" className="nav-link">
                            Services
                            <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#web-saas" className="dropdown-item">Web & SaaS Development</a>
                            <a href="#mobile" className="dropdown-item">Mobile Development</a>
                            <a href="#ai" className="dropdown-item">AI Solutions</a>
                            <a href="#interior" className="dropdown-item">Interior Showcase</a>
                        </div>
                    </div>
                    
                    <a href="#projects" className="nav-link">Projects</a>
                </div>

                {/* Desktop Contact Button */}
                <a href="#contact" className="contact-btn">Contact Us</a>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
                    <span className={`hamburger ${isSidebarOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={closeSidebar}></div>
            )}
            <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <div className="logo-text">
                            <span className="logo-one">One</span>
                            <span className="logo-axis">Axis</span>
                        </div>
                        <div className="logo-underline"></div>
                    </div>
                    <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <nav className="sidebar-nav">
                    <a href="#home" className="sidebar-link" onClick={closeSidebar}>Home</a>
                    
                    <div className="sidebar-dropdown">
                        <div className="sidebar-dropdown-label">Services</div>
                        <div className="sidebar-dropdown-content">
                            <a href="#web-saas" className="sidebar-sublink" onClick={closeSidebar}>Web & SaaS Development</a>
                            <a href="#mobile" className="sidebar-sublink" onClick={closeSidebar}>Mobile Development</a>
                            <a href="#ai" className="sidebar-sublink" onClick={closeSidebar}>AI Solutions</a>
                            <a href="#interior" className="sidebar-sublink" onClick={closeSidebar}>Interior Showcase</a>
                        </div>
                    </div>
                    
                    <a href="#projects" className="sidebar-link" onClick={closeSidebar}>Projects</a>
                </nav>
                
                <div className="sidebar-footer">
                    <a href="#contact" className="sidebar-contact-btn" onClick={closeSidebar}>
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
