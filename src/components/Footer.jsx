import React from 'react';
import { 
  ArrowRight, Globe, Mail, Phone, MapPin, Sparkles, 
  ArrowUp, ShieldCheck, CheckCircle2, Instagram, Linkedin, Github 
} from './Icons';
import { useConfig } from '../context/ConfigContext';

const logoImg = '/logo.webp';
import footerBg from '../assets/footer_bg.webp';

export default function Footer({ onContactClick }) {
  const { config } = useConfig();
  const email = config?.brand?.email || 'villupuram.developer@gmail.com';
  const address = config?.brand?.address || 'Villupuram • Chennai • Tamil Nadu';
  const responseTime = config?.brand?.responseTime || 'Typical response under 2 hours';

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (href === '#contact') {
      onContactClick();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="pro-footer" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        backgroundImage: `linear-gradient(to bottom, rgba(6, 7, 11, 0.92) 0%, rgba(4, 5, 8, 0.98) 100%), url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      {/* Procedural Tech Circuit Overlay SVG */}
      <div 
        className="footer-circuit-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.45,
          zIndex: 1
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="footer-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ffa800" stopOpacity="0.05" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <pattern id="footer-grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.025)" strokeWidth="1"/>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#footer-grid-pattern)" />
          <circle cx="600" cy="200" r="380" fill="url(#footer-glow-grad)" />
          
          {/* Circuit Trace Lines */}
          <g stroke="rgba(255, 107, 0, 0.25)" strokeWidth="1.2" strokeLinecap="round">
            <path d="M 100 120 H 260 L 300 160 V 320" />
            <path d="M 1100 450 H 940 L 900 410 V 220" />
            <path d="M 220 480 H 380 L 420 440 V 300" />
            <path d="M 980 120 H 820 L 780 160 V 280" />
          </g>
          
          {/* Glowing Circuit Node points */}
          <circle cx="300" cy="160" r="3.5" fill="#ff6b00" style={{ filter: 'drop-shadow(0 0 6px #ff6b00)' }} />
          <circle cx="900" cy="410" r="3.5" fill="#ffa800" style={{ filter: 'drop-shadow(0 0 6px #ffa800)' }} />
          <circle cx="420" cy="440" r="3.5" fill="#ffa800" style={{ filter: 'drop-shadow(0 0 6px #ffa800)' }} />
          <circle cx="780" cy="160" r="3.5" fill="#ff6b00" style={{ filter: 'drop-shadow(0 0 6px #ff6b00)' }} />
        </svg>
      </div>

      {/* Ambient Radial Backlight Glow */}
      <div className="footer-glow-aura"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Quick Launch Callout Banner */}
        <div className="pro-footer-banner">
          <div className="banner-left">
            <span className="banner-badge">
              <Sparkles size={12} color="#f59e0b" />
              <span>RAPID 4-DAY LAUNCH</span>
            </span>
            <h3 className="banner-title">Ready to build a website that grows your business?</h3>
          </div>
          <button className="btn btn-primary banner-btn" onClick={onContactClick}>
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Main 4-Column Glassmorphic Footer Grid */}
        <div className="pro-footer-grid">
          
          {/* Column 1: Brand & Slogan */}
          <div className="footer-col footer-col-brand">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="footer-brand-logo">
              <img src={logoImg} alt="Villupuram Developer Logo" className="footer-logo-img" width="188" height="75" loading="lazy" decoding="async" />
            </a>
            
            <p className="footer-slogan">
              Your Idea. Your Website. Your Digital Presence.
            </p>

            <div className="footer-location-tag">
              <MapPin size={13} color="#f59e0b" />
              <span>{address}</span>
            </div>
          </div>

          {/* Column 2: Web Engineering Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-list">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Business Websites</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>E-Commerce Storefronts</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Custom Web Applications</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Local Business SEO &amp; Ranking</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Selected Work</a></li>
              <li><a href="#process" onClick={(e) => handleLinkClick(e, '#process')}>Transparent Workflow</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Our Studio</a></li>
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>Frequently Asked Questions</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact &amp; Estimate</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Line */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-contact-box">
              <a href={`mailto:${email}`} className="footer-contact-link">
                <Mail size={14} color="#f59e0b" />
                <span>{email}</span>
              </a>
              <div className="footer-response-tag">
                <CheckCircle2 size={12} color="#10b981" />
                <span>{responseTime}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="pro-social-btn" aria-label="Instagram">
                <Instagram size={16} />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="pro-social-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="pro-social-btn" aria-label="GitHub">
                <Github size={16} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pro-footer-bottom">
          <p className="footer-copy-text">
            &copy; 2026 Villupuram Developer. All rights reserved.
          </p>

          <p className="footer-build-text">
            Engineered with React 19 &amp; Vite 8 in Tamil Nadu.
          </p>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
