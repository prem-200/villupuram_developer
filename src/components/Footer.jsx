import React from 'react';
import { 
  ArrowRight, Globe, Mail, Phone, MapPin, Sparkles, 
  ArrowUp, ShieldCheck, CheckCircle2, Instagram, Linkedin, Github 
} from './Icons';

const logoImg = '/logo.webp';
import footerBg from '../assets/footer_bg.webp';

export default function Footer({ onContactClick }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    
    if (href === '#contact') {
      onContactClick();
      return;
    }

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
        backgroundImage: `linear-gradient(to bottom, rgba(7, 8, 12, 0.94), rgba(4, 5, 8, 0.98)), url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      {/* Glow Aura Background Effect */}
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
              <span>Villupuram • Chennai • Tamil Nadu</span>
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
            </ul>
          </div>

          {/* Column 4: Contact & Direct Line */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-contact-box">
              <a href="mailto:villupuram.developer@gmail.com" className="footer-contact-link">
                <Mail size={14} color="#f59e0b" />
                <span>villupuram.developer@gmail.com</span>
              </a>
              <div className="footer-response-tag">
                <CheckCircle2 size={12} color="#10b981" />
                <span>Typical response under 2 hours</span>
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
