import React, { useState, useEffect } from 'react';
import '../css/Softwares.css';
import Ballpit from '../../Reactbits/Ballpit/Ballpit';
import { HiLightningBolt } from 'react-icons/hi';
import { MdDesignServices, MdCloud } from 'react-icons/md';
import Footer from '../components/Footer';
import {
    FaShieldAlt,
    FaMobile,
    FaRobot,
    FaGlobeAmericas,
    FaHandsHelping
} from 'react-icons/fa';

const BALLPIT_COLORS = [0xff9a76, 0xff7e9a, 0x7e9aff];

const Softwares = () => {
    // Detect if device is mobile/tablet for disabling ball interaction
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.innerWidth <= 1024;
    });

    useEffect(() => {
        const checkMobile = () => {
            if (typeof window === 'undefined') {
                return;
            }
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="softwares-container">
            {/* Section 1 - Hero Section */}
            <div className="section section-1" style={{ zIndex: 1 }}>
                <Ballpit
                    colors={BALLPIT_COLORS}
                    count={80}
                    interactive={!isMobile}
                    followCursor={!isMobile}
                    gravity={0.05}
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
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="btn-secondary">View Services</button>
                    </div>
                </div>
            </div>

            {/* Section 2 - Elevation Narrative */}
            <div className="section section-2" style={{ zIndex: 2 }}>
                <div className="section-2-inner">
                    {/* Expertise & Capabilities */}
                    <section className="softwares-section expertise-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Our Expertise</span>
                            <h2>End-to-end digital product excellence</h2>
                            <p>
                                From concept to continuous improvement, our teams architect resilient platforms,
                                design premium experiences, and automate operations so you can scale with confidence.
                            </p>
                        </div>
                        <div className="expertise-grid">
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <MdDesignServices />
                                </span>
                                <h3>Web & SaaS Platforms</h3>
                                <p>Composable, high-performance web products engineered for growth.</p>
                                <ul>
                                    <li>Micro frontends & design systems</li>
                                    <li>Secure multi-tenant SaaS architectures</li>
                                </ul>
                            </article>
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <FaMobile />
                                </span>
                                <h3>Mobile Applications</h3>
                                <p>Native and cross-platform experiences optimized for retention.</p>
                                <ul>
                                    <li>Customer-grade UX informed by journey analytics</li>
                                    <li>Offline-first, secure feature delivery pipelines</li>
                                </ul>
                            </article>
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <FaRobot />
                                </span>
                                <h3>AI-Powered Solutions</h3>
                                <p>Responsible AI frameworks that amplify decision-making and automation.</p>
                                <ul>
                                    <li>Generative copilots, personalization, and intelligent routing</li>
                                    <li>ML Ops orchestration with transparent governance</li>
                                </ul>
                            </article>
                            <article className="expertise-card">
                                <span className="card-icon" aria-hidden="true">
                                    <MdCloud />
                                </span>
                                <h3>Cloud & DevOps</h3>
                                <p>Cloud-native foundations with observability, resilience, and automation.</p>
                                <ul>
                                    <li>Landing zones across AWS, Azure, and GCP</li>
                                    <li>GitOps, IaC, and zero-downtime release orchestration</li>
                                </ul>
                            </article>
                        </div>
                    </section>

                    {/* Technology Stack */}
                    <section className="softwares-section stack-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Technology Stack</span>
                            <h2>Future-proof and scalable engineering toolkits</h2>
                            <p>
                                We select the most modern, battle-tested technologies to accelerate delivery while
                                maintaining flexibility for your roadmap.
                            </p>
                        </div>
                        <div className="stack-grid">
                            <div className="stack-card">
                                <h3>Experience Layer</h3>
                                <div className="stack-tags">
                                    <span>React</span>
                                    <span>Next.js</span>
                                    <span>TypeScript</span>
                                    <span>Tailwind</span>
                                </div>
                            </div>
                            <div className="stack-card">
                                <h3>Platforms & APIs</h3>
                                <div className="stack-tags">
                                    <span>Node.js</span>
                                    <span>Python</span>
                                    <span>GraphQL</span>
                                    <span>Java</span>
                                </div>
                            </div>
                            <div className="stack-card">
                                <h3>Cloud & Data</h3>
                                <div className="stack-tags">
                                    <span>AWS</span>
                                    <span>Azure</span>
                                    <span>GCP</span>
                                    <span>Snowflake</span>
                                </div>
                            </div>
                            <div className="stack-card">
                                <h3>Intelligence</h3>
                                <div className="stack-tags">
                                    <span>OpenAI</span>
                                    <span>Vertex AI</span>
                                    <span>LangChain</span>
                                    <span>TensorFlow</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AI & Future-Ready Solutions */}
                    <section className="softwares-section future-section">
                        <div className="future-copy">
                            <span className="section-eyebrow">AI & Future-Ready</span>
                            <h2>Intelligent ecosystems designed to evolve</h2>
                            <p>
                                Our AI practice blends data strategy, ethical frameworks, and accelerated delivery to
                                unlock transformative value without compromising trust.
                            </p>
                            <ul className="future-list">
                                <li>Responsible AI governance with bias monitoring and model lifecycle controls</li>
                                <li>Domain-specific copilots that augment teams and boost productivity</li>
                                <li>Predictive insights, autonomous workflows, and decision intelligence dashboards</li>
                            </ul>
                        </div>
                        <div className="future-panel">
                            <div className="panel-card">
                                <HiLightningBolt aria-hidden="true" />
                                <div>
                                    <h3>Intelligence Accelerators</h3>
                                    <p>
                                        Reusable blueprints for rapid experimentation, MLOps automation, and scalable
                                        deployment into your enterprise ecosystem.
                                    </p>
                                </div>
                            </div>
                            <div className="panel-card">
                                <FaHandsHelping aria-hidden="true" />
                                <div>
                                    <h3>Co-innovation Pods</h3>
                                    <p>
                                        Cross-disciplinary teams that co-create with your stakeholders to deliver
                                        measurable outcomes and continuous optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Approach / Why Choose Us */}
                    <section className="softwares-section approach-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Why Choose Us</span>
                            <h2>An operating model engineered for certainty</h2>
                            <p>
                                We orchestrate every engagement with clarity, velocity, and measurable outcomes so
                                your teams can focus on strategic vision.
                            </p>
                        </div>
                        <div className="approach-steps">
                            <div className="approach-step">
                                <span className="step-index">01</span>
                                <h3>Discover & Align</h3>
                                <p>Immersive workshops and discovery sprints to clarify goals and success metrics.</p>
                            </div>
                            <div className="approach-step">
                                <span className="step-index">02</span>
                                <h3>Design the Experience</h3>
                                <p>Experience strategy, product design, and architecture blueprints built in tandem.</p>
                            </div>
                            <div className="approach-step">
                                <span className="step-index">03</span>
                                <h3>Build & Launch</h3>
                                <p>Agile delivery with automated QA, DevSecOps, and progressive rollouts.</p>
                            </div>
                            <div className="approach-step">
                                <span className="step-index">04</span>
                                <h3>Optimize & Scale</h3>
                                <p>Continuous insights, A/B experimentation, and product growth roadmapping.</p>
                            </div>
                        </div>
                    </section>

                    {/* Client Success & Global Reach */}
                    <section className="softwares-section reach-section">
                        <div className="reach-heading">
                            <span className="section-eyebrow">Client Success</span>
                            <h2>Global impact with measurable outcomes</h2>
                            <p>
                                We partner with venture-backed innovators, scale-ups, and Fortune enterprises across
                                the globe to deliver category-defining products.
                            </p>
                        </div>
                        <div className="reach-wrapper">
                            <div className="reach-left">
                                <div className="reach-intro">
                                    <FaGlobeAmericas aria-hidden="true" />
                                    <p>
                                        Always-on teams across North America, Europe, and Asia Pacific ensure around-the-
                                        clock momentum and localization expertise.
                                    </p>
                                </div>
                                <div className="reach-intro">
                                    <FaShieldAlt aria-hidden="true" />
                                    <p>
                                        Enterprise-grade security, compliance frameworks, and transparent governance built into every engagement.
                                    </p>
                                </div>
                            </div>
                            <div className="stat-grid">
                                <div className="stat-card">
                                    <strong>50M+</strong>
                                    <span>Active users supported</span>
                                </div>
                                <div className="stat-card">
                                    <strong>40%</strong>
                                    <span>Average efficiency uplift post launch</span>
                                </div>
                                <div className="stat-card">
                                    <strong>24/7</strong>
                                    <span>Global delivery coverage</span>
                                </div>
                                <div className="stat-card">
                                    <strong>AA+</strong>
                                    <span>Security posture ratings</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About / Who We Are */}
                    <section className="softwares-section about-section">
                        <div className="section-copy">
                            <span className="section-eyebrow">Who We Are</span>
                            <h2>Modern product teams for ambitious leaders</h2>
                            <p>
                                OneAxis assembles elite strategists, designers, and engineers to build digital
                                products that outperform business goals. We blend Silicon Valley velocity with
                                enterprise-grade rigor, giving you a partner that can imagine, engineer, and evolve
                                the platforms powering your next decade.
                            </p>
                            <div className="about-highlights">
                                <div className="about-card">
                                    <h3>Strategic Vision</h3>
                                    <p>
                                        Product-first mindset anchored in human-centered design, measurable value,
                                        and future-ready architectures.
                                    </p>
                                </div>
                                <div className="about-card">
                                    <h3>Embedded Partnerships</h3>
                                    <p>
                                        Dedicated pods that integrate with your teams, guided by transparent delivery
                                        rituals and C-suite visibility.
                                    </p>
                                </div>
                                <div className="about-card">
                                    <h3>Security & Trust</h3>
                                    <p>
                                        Secure-by-design frameworks, compliance-ready pipelines, and automated
                                        quality checkpoints from day one.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-identity">
                            <div className="identity-card">
                                <span className="identity-badge">Award-Winning Delivery</span>
                                <h3>Purpose-built for high-growth and enterprise programs</h3>
                                <ul className="identity-list">
                                    <li>Global talent hubs operating in 3 time zones</li>
                                    <li>Design-led engineering with measurable business KPIs</li>
                                    <li>Proactive governance, security reviews, and observability</li>
                                </ul>
                            </div>
                            <div className="identity-stats">
                                <div className="stat-block">
                                    <strong>95%</strong>
                                    <span>Client retention and renewals</span>
                                </div>
                                <div className="stat-block">
                                    <strong>30+</strong>
                                    <span>Global enterprise launches</span>
                                </div>
                                <div className="stat-block">
                                    <strong>6-8 weeks</strong>
                                    <span>Average time to MVP release</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact / CTA */}
                    <section className="softwares-section contact-section">
                        <div className="contact-card">
                            <span className="section-eyebrow">Let&apos;s Collaborate</span>
                            <h2>Design the future of your digital business</h2>
                            <p>
                                Share your product vision and our strategists will craft a tailored roadmap, complete
                                with investment-ready milestones, technology recommendations, and acceleration models.
                            </p>
                            <div className="contact-actions">
                                <button type="button" className="btn-primary">Book a Strategy Call</button>
                                <button type="button" className="btn-secondary">Download Capability Deck</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            {/* Footer Outside section-2 */}
            <Footer></Footer>
        </div>
    );
};

export default Softwares;
