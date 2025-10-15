import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import InteriorDesign from '../components/InteriorDesign'
import Footer from '../components/Footer'
import '../css/InteriorServices.css'

// Interior Design Image URLs
const ModernLiving = 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop';
const LuxuryBedroom = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2532&auto=format&fit=crop';
const ModernKitchen = 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2670&auto=format&fit=crop';
const ElegantDining = 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2535&auto=format&fit=crop';
const ContemporaryOffice = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop';
const MinimalistBathroom = 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop';
const CozyLounge = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2558&auto=format&fit=crop';
const ScandiStyle = 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2532&auto=format&fit=crop';

function Interior() {
    const navigate = useNavigate()

    return (
        <div className="interior-services-page">
            <Navbar />
            <InteriorDesign />

            {/* Excellence & Innovation Section */}
            <ExcellenceInnovationSection />

            {/* Design Philosophy Section */}
            <DesignPhilosophySection />

            {/* Why Choose Us Section */}
            <WhyChooseUsSection />

            {/* Design Portfolio Gallery */}
            <PortfolioGallerySection />

            {/* Our Services Showcase */}
            <ServicesShowcaseSection navigate={navigate} />

            <Footer />
        </div>
    )
}

// Excellence & Innovation Component
const ExcellenceInnovationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="excellence-section" className="interior-excellence-section" ref={sectionRef}>
      <div className="services-container">
        <motion.div
          className="services-section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-section-title">Design Excellence</h2>
          <p className="services-section-description">
            Creating exceptional spaces that blend aesthetics with functionality
          </p>
        </motion.div>
        <div className="interior-excellence-layout">
          {/* Image Side - Left */}
          <motion.div
            className="interior-excellence-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="interior-excellence-image-wrapper">
              <img
                src={ModernLiving}
                alt="Modern Interior Design Excellence"
                className="interior-excellence-img"
              />
              <div className="interior-excellence-badge">
                <span className="interior-badge-text">Premium</span>
                <span className="interior-badge-subtext">Design</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            className="interior-excellence-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="interior-excellence-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transforming Spaces, Elevating Lives
            </motion.h3>

            <motion.p
              className="interior-excellence-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At One Axis, we believe that exceptional interior design goes beyond aesthetics—it's about creating spaces that inspire, comfort, and elevate everyday living. Our team of expert designers combines creativity with precision to deliver bespoke interiors that reflect your unique personality and lifestyle.
            </motion.p>

            <motion.div
              className="interior-excellence-highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="interior-highlight-item">
                <div className="interior-highlight-content">
                  <h4>Bespoke Solutions</h4>
                  <p>Tailored designs crafted specifically for your space and vision</p>
                </div>
              </div>
              <div className="interior-highlight-item">
                <div className="interior-highlight-content">
                  <h4>Premium Materials</h4>
                  <p>Carefully curated materials for luxury and durability</p>
                </div>
              </div>
              <div className="interior-highlight-item">
                <div className="interior-highlight-content">
                  <h4>Expert Execution</h4>
                  <p>Flawless implementation with attention to every detail</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Design Philosophy Component
const DesignPhilosophySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="design-philosophy" className="interior-philosophy-section" ref={sectionRef}>
      <div className="services-container">
        <div className="interior-philosophy-layout">
          {/* Image Side - Left */}
          <motion.div
            className="interior-philosophy-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="interior-philosophy-image-wrapper">
              <img
                src={LuxuryBedroom}
                alt="Luxury bedroom interior design"
                className="interior-philosophy-img"
              />
              <div className="interior-philosophy-image-overlay">
                <div className="interior-philosophy-overlay-content">
                  <span className="interior-philosophy-overlay-text">Timeless Elegance</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            className="interior-philosophy-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="interior-philosophy-title">Our Design Philosophy</h2>

            <motion.p
              className="interior-philosophy-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We believe in creating timeless spaces that seamlessly blend form and function. Our design philosophy centers on understanding your lifestyle, preferences, and aspirations, then translating them into spaces that not only look stunning but also enhance your daily living experience. Every project is a unique journey where we balance contemporary trends with classic elegance.
            </motion.p>

            <motion.div
              className="interior-philosophy-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="interior-philosophy-feature-item">
                <div className="interior-philosophy-feature-number">Client-First</div>
                <div className="interior-philosophy-feature-text">Approach</div>
              </div>
              <div className="interior-philosophy-feature-item">
                <div className="interior-philosophy-feature-number">Sustainable</div>
                <div className="interior-philosophy-feature-text">Design</div>
              </div>
              <div className="interior-philosophy-feature-item">
                <div className="interior-philosophy-feature-number">Timeless</div>
                <div className="interior-philosophy-feature-text">Aesthetics</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Component
const WhyChooseUsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="why-choose-us" className="interior-distinction-section" ref={sectionRef}>
      <div className="services-container">
        <div className="interior-distinction-layout">
          {/* Content Side */}
          <motion.div
            className="interior-distinction-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="interior-distinction-title">Why Choose One Axis?</h2>

            <motion.p
              className="interior-distinction-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              With years of expertise in creating stunning interiors, we bring a perfect blend of creativity, technical excellence, and project management. Our commitment to quality, transparency, and client satisfaction sets us apart. From concept to completion, we ensure every aspect of your project exceeds expectations, delivering spaces that are both beautiful and functional.
            </motion.p>

            <motion.div
              className="interior-distinction-features"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="interior-feature-item">
                <div className="interior-feature-number">10+</div>
                <div className="interior-feature-text">Years Experience</div>
              </div>
              <div className="interior-feature-item">
                <div className="interior-feature-number">500+</div>
                <div className="interior-feature-text">Projects</div>
              </div>
              <div className="interior-feature-item">
                <div className="interior-feature-number">100%</div>
                <div className="interior-feature-text">Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              className="interior-distinction-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#services-showcase" className="interior-discover-link">
                Explore Our Services →
              </a>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="interior-distinction-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="interior-image-wrapper">
              <img
                src={ModernKitchen}
                alt="Modern kitchen interior design"
                className="interior-distinction-img"
              />
              <div className="interior-image-overlay">
                <div className="interior-overlay-content">
                  <span className="interior-overlay-text">Design Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Portfolio Gallery Component
const PortfolioGallerySection = () => {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const portfolioItems = [
    {
      src: ElegantDining,
      title: "Elegant Dining",
      subtitle: "Sophisticated dining spaces that bring family and friends together in style",
      badge: "Residential"
    },
    {
      src: ContemporaryOffice,
      title: "Modern Workspace",
      subtitle: "Productive office environments that inspire creativity and collaboration",
      badge: "Commercial"
    },
    {
      src: MinimalistBathroom,
      title: "Luxury Bathrooms",
      subtitle: "Spa-like retreats combining comfort with contemporary elegance",
      badge: "Premium"
    },
    {
      src: CozyLounge,
      title: "Cozy Lounges",
      subtitle: "Inviting spaces perfect for relaxation and entertainment",
      badge: "Living"
    },
    {
      src: ScandiStyle,
      title: "Scandinavian Style",
      subtitle: "Minimalist aesthetics with warm, functional design elements",
      badge: "Modern"
    }
  ];

  return (
    <section className="interior-gallery-section" ref={galleryRef}>
      <div className="gallery-header-container">
        <h2 className="gallery-section-title">Our Design Portfolio</h2>
        <p className="gallery-section-subtitle">Explore our collection of beautifully crafted spaces</p>
      </div>
      <motion.div
        className="interior-horizontal-scroll-container"
        style={isMobile ? {} : { x }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30
        }}
      >
        {portfolioItems.map((item, i) => (
          <div key={i} className="interior-gallery-item">
            <img src={item.src} alt={item.title} />
            <div className="interior-gallery-overlay">
              <div className="interior-gallery-overlay-content">
                <h3 className="interior-gallery-overlay-title">{item.title}</h3>
                <p className="interior-gallery-overlay-subtitle">{item.subtitle}</p>
                <span className="interior-gallery-overlay-badge">{item.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// Services Showcase Component
const ServicesShowcaseSection = ({ navigate }) => {
  const dashboardVideoRef = useRef(null);

  const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleLearnMoreClick = () => {
    navigate('/');
  };

  return (
    <section id="services-showcase" className="interior-showcase-section">
      {/* Background Video */}
      <div className="interior-video-container">
        <video
          ref={dashboardVideoRef}
          className="interior-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://videos.pexels.com/video-files/4839564/4839564-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Video Overlay */}
      <div className="interior-video-overlay"></div>
      
      <div className="services-container">
        <div className="interior-showcase-layout">
          {/* Left Content */}
          <div className="interior-content-left">
            <div className="interior-text-content">
              <h2 className="interior-main-title">Complete Interior Design Services</h2>
              <p className="interior-main-description">
                From conceptualization to final execution, we offer comprehensive interior design services that transform your vision into reality. Our expert team handles every detail with precision and care, ensuring your space is both beautiful and functional.
              </p>
              
              <div className="interior-features-list">
                <div className="interior-feature-point">
                  <span className="interior-feature-bullet">•</span>
                  <span>Residential & Commercial Design</span>
                </div>
                <div className="interior-feature-point">
                  <span className="interior-feature-bullet">•</span>
                  <span>3D Visualization & Planning</span>
                </div>
                <div className="interior-feature-point">
                  <span className="interior-feature-bullet">•</span>
                  <span>Custom Furniture & Decor</span>
                </div>
                <div className="interior-feature-point">
                  <span className="interior-feature-bullet">•</span>
                  <span>Project Management & Execution</span>
                </div>
              </div>

              <div className="interior-stats-left">
                <div className="interior-stat-item-left">
                  <div className="interior-stat-number-left">Premium</div>
                  <div className="interior-stat-label-left">Quality</div>
                </div>
                <div className="interior-stat-item-left">
                  <div className="interior-stat-number-left">Expert</div>
                  <div className="interior-stat-label-left">Team</div>
                </div>
                <div className="interior-stat-item-left">
                  <div className="interior-stat-number-left">On-Time</div>
                  <div className="interior-stat-label-left">Delivery</div>
                </div>
              </div>

              <div className="interior-cta-left">
                <button 
                  className="interior-cta-btn interior-primary" 
                  onClick={handleContactClick}
                >
                  Get Started
                </button>
                <button 
                  className="interior-cta-btn interior-secondary"
                  onClick={handleLearnMoreClick}
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="interior-images-right">
            <div className="interior-floating-images-container">
              <div className="interior-floating-image interior-primary-image">
                <img src={ModernLiving} alt="Modern Living Room Design" />
                <div className="interior-image-glow"></div>
              </div>
              
              <div className="interior-floating-image interior-secondary-image">
                <img src={LuxuryBedroom} alt="Luxury Bedroom Design" />
                <div className="interior-image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior
