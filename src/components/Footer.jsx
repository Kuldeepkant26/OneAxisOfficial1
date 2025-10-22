import React from 'react';
import '../css/Footer.css';
import { 
    FaLinkedinIn, 
    FaTwitter, 
    FaInstagram, 
    FaFacebookF,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">
                            <span className="logo-gradient">OneAxis</span>
                        </h2>
                        <p className="footer-tagline">
                            Transforming visions into digital excellence. We craft innovative solutions that drive your business forward.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3 className="footer-heading">Services</h3>
                            <ul className="footer-list">
                                <li><a href="#mobile">Mobile Development</a></li>
                                <li><a href="#web">Web & SaaS Development</a></li>
                                <li><a href="#ai">AI Solutions</a></li>
                                <li><a href="#interior">Interior Design</a></li>
                                <li><a href="#consulting">Consulting</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-list">
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-contact">
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <a href="mailto:info@oneaxis.com">info@oneaxis.com</a>
                                </li>
                                <li>
                                    <FaPhone className="contact-icon" />
                                    <a href="tel:+918954535455">+91 89545 35455</a>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Avas Vikas 1st DM Road, Bulandshahr, 203001</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} OneAxis. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <span className="legal-divider">•</span>
                        <a href="#terms">Terms of Service</a>
                        <span className="legal-divider">•</span>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="footer-decoration footer-decoration-1"></div>
            <div className="footer-decoration footer-decoration-2"></div>
        </footer>
    );
};

export default Footer;
