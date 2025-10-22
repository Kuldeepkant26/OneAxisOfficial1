import React, { useState, useEffect } from 'react';
import '../css/InteriorDesign.css';

const InteriorDesign = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'residential', name: 'Residential' },
        { id: 'commercial', name: 'Commercial' },
        { id: 'luxury', name: 'Luxury Spaces' },
        { id: 'minimalist', name: 'Minimalist' }
    ];

    const projects = [
        {
            id: 1,
            title: 'Modern Minimalist Residence',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
            description: 'A serene living space combining functionality with aesthetic beauty',
            location: 'Beverly Hills, CA',
            area: '4,500 sq ft'
        },
        {
            id: 2,
            title: 'Executive Office Suite',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            description: 'Contemporary workspace designed for productivity and elegance',
            location: 'Manhattan, NY',
            area: '3,200 sq ft'
        },
        {
            id: 3,
            title: 'Luxury Penthouse',
            category: 'luxury',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            description: 'Opulent living at its finest with panoramic city views',
            location: 'Dubai Marina',
            area: '6,800 sq ft'
        },
        {
            id: 4,
            title: 'Scandinavian Retreat',
            category: 'minimalist',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            description: 'Clean lines and natural materials create a peaceful sanctuary',
            location: 'Stockholm, Sweden',
            area: '2,800 sq ft'
        },
        {
            id: 5,
            title: 'Boutique Hotel Lobby',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
            description: 'Welcoming guests with timeless elegance and sophistication',
            location: 'Paris, France',
            area: '5,000 sq ft'
        },
        {
            id: 6,
            title: 'Contemporary Villa',
            category: 'luxury',
            image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
            description: 'Where modern architecture meets luxurious comfort',
            location: 'Malibu, CA',
            area: '7,200 sq ft'
        }
    ];

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 6.5h0M17.5 6.5h0M6.5 17.5h0M17.5 17.5h0" strokeLinecap="round"/>
                </svg>
            ),
            title: 'Space\nPlanning',
            description: 'Optimizing layouts for functionality and aesthetic appeal'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11.5V20M12 11.5L3 6.5M12 11.5L21 6.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="11.5" r="1.5" fill="currentColor"/>
                </svg>
            ),
            title: 'Concept\nDevelopment',
            description: 'Creating unique design narratives tailored to your vision'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3h6l6 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9l6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 3v6h6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: 'Project\nManagement',
            description: 'Seamless execution from concept to completion'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="8" width="18" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12h18M7 8V5a1 1 0 011-1h8a1 1 0 011 1v3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="16" r="0.5" fill="currentColor"/>
                    <circle cx="16" cy="16" r="0.5" fill="currentColor"/>
                </svg>
            ),
            title: 'Custom\nFurniture',
            description: 'Bespoke pieces crafted to perfection'
        }
    ];

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="interior-design-page">
            {/* Section 1 - Hero Section */}
            <div className="interior-section interior-section-1" style={{ zIndex: 1 }}>
                <div className={`interior-design-container ${isLoaded ? 'loaded' : ''}`}>
                    {/* Hero Section */}
                    <section className="interior-hero">
                        <div className="interior-hero-overlay"></div>
                        <div className="interior-hero-content">
                            <h1 className="interior-hero-title">
                                <span className="interior-hero-subtitle">Luxury</span>
                                Interior Design
                            </h1>
                            <p className="interior-hero-description">
                                Transforming spaces into timeless masterpieces of elegance and sophistication
                            </p>
                            <div className="interior-hero-buttons">
                                <a href="#portfolio" className="interior-hero-btn primary">
                                    View Portfolio
                                </a>
                                <a href="#contact" className="interior-hero-btn secondary">
                                    Schedule Consultation
                                </a>
                            </div>
                        </div>
                        <div className="interior-hero-scroll">
                            <div className="scroll-indicator">
                                <span></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Section 2 - Content */}
            <div className="interior-section interior-section-2" style={{ zIndex: 2 }}>
                <div className={`interior-design-container ${isLoaded ? 'loaded' : ''}`}>


                {/* Philosophy Section */}
                <section className="interior-philosophy">
                    <div className="interior-philosophy-container">
                        <div className="interior-philosophy-content">
                            <span className="interior-section-label">Our Philosophy</span>
                            <h2 className="interior-section-title">
                                Crafting Spaces That Inspire
                            </h2>
                            <p className="interior-philosophy-text">
                                At OneAxis, we believe that interior design is more than just aesthetics—it's about creating environments that enhance the way you live, work, and experience life. Our approach combines timeless elegance with contemporary innovation, resulting in spaces that are both beautiful and functional.
                            </p>
                            <p className="interior-philosophy-text">
                                Each project is a unique journey, guided by your vision and elevated by our expertise. We meticulously curate every detail, from the grandest architectural elements to the finest finishing touches, ensuring a harmonious blend of form and function.
                            </p>
                            <div className="interior-philosophy-stats">
                                <div className="interior-stat">
                                    <span className="interior-stat-number">200+</span>
                                    <span className="interior-stat-label">Projects Completed</span>
                                </div>
                                <div className="interior-stat">
                                    <span className="interior-stat-number">15+</span>
                                    <span className="interior-stat-label">Years Experience</span>
                                </div>
                                <div className="interior-stat">
                                    <span className="interior-stat-number">98%</span>
                                    <span className="interior-stat-label">Client Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="interior-philosophy-image">
                            <div className="interior-image-wrapper">
                                <img 
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                                    alt="Luxury Interior" 
                                />
                                <div className="interior-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="interior-services">
                    <div className="interior-services-header">
                        <span className="interior-section-label">What We Offer</span>
                        <h2 className="interior-section-title">Comprehensive Design Services</h2>
                        <p className="interior-services-subtitle">
                            From concept to completion, we provide end-to-end solutions
                        </p>
                    </div>
                    <div className="interior-services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="interior-service-card">
                                <div className="interior-service-icon">{service.icon}</div>
                                <h3 className="interior-service-title">{service.title}</h3>
                                <p className="interior-service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="interior-portfolio" id="portfolio">
                    <div className="interior-portfolio-header">
                        <span className="interior-section-label">Portfolio</span>
                        <h2 className="interior-section-title">Featured Projects</h2>
                        <p className="interior-portfolio-subtitle">
                            Explore our collection of award-winning designs
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="interior-category-filter">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`interior-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="interior-projects-grid">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="interior-project-card">
                                <div className="interior-project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="interior-project-overlay">
                                        <button className="interior-project-view">View Details</button>
                                    </div>
                                </div>
                                <div className="interior-project-info">
                                    <h3 className="interior-project-title">{project.title}</h3>
                                    <p className="interior-project-description">{project.description}</p>
                                    <div className="interior-project-meta">
                                        <span className="interior-project-location">📍 {project.location}</span>
                                        <span className="interior-project-area">📏 {project.area}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="interior-process">
                    <div className="interior-process-header">
                        <span className="interior-section-label">Our Process</span>
                        <h2 className="interior-section-title">From Vision to Reality</h2>
                    </div>
                    <div className="interior-process-timeline">
                        <div className="interior-process-step">
                            <div className="interior-step-number">01</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Discovery</h3>
                                <p className="interior-step-description">
                                    Understanding your vision, lifestyle, and unique requirements
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">02</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Concept Design</h3>
                                <p className="interior-step-description">
                                    Creating mood boards, sketches, and 3D visualizations
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">03</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Development</h3>
                                <p className="interior-step-description">
                                    Detailed planning, material selection, and technical drawings
                                </p>
                            </div>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-number">04</div>
                            <div className="interior-step-content">
                                <h3 className="interior-step-title">Execution</h3>
                                <p className="interior-step-description">
                                    Bringing the design to life with meticulous attention to detail
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="interior-cta">
                    <div className="interior-cta-content">
                        <h2 className="interior-cta-title">Ready to Transform Your Space?</h2>
                        <p className="interior-cta-description">
                            Let's create something extraordinary together. Schedule a consultation with our design experts.
                        </p>
                        <a href="#contact" className="interior-cta-btn">
                            Get Started Today
                        </a>
                    </div>
                </section>
                </div>
            </div>
        </div>
    );
};

export default InteriorDesign;
