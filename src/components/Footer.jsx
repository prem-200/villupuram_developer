import React from 'react';
import logoImg from '../assets/new.webp';
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

  return (
    <footer 
      className="footer" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        backgroundImage: `linear-gradient(to bottom, rgba(4, 4, 6, 0.88), rgba(4, 4, 6, 0.96)), url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          
          <div className="footer-col footer-brand">
            <img src={logoImg} alt="Villupuram Developer Logo" className="footer-logo" width="188" height="75" loading="lazy" decoding="async" />
            <p className="footer-tagline" style={{ marginTop: '0.75rem' }}>
              Your Idea. Your Website. Your Digital Presence.
            </p>
          </div>

          <div className="footer-col">
            <h3>Solutions</h3>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link" onClick={(e) => handleLinkClick(e, '#services')}>Business Websites</a></li>
              <li><a href="#services" className="footer-link" onClick={(e) => handleLinkClick(e, '#services')}>E-Commerce Stores</a></li>
              <li><a href="#services" className="footer-link" onClick={(e) => handleLinkClick(e, '#services')}>Custom Web Apps</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#projects" className="footer-link" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a></li>
              <li><a href="#about" className="footer-link" onClick={(e) => handleLinkClick(e, '#about')}>About Us</a></li>
              <li><a href="#contact" className="footer-link" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Connect</h3>
            <ul className="footer-socials">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
            <span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>villupuram.developer@gmail.com</span>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2026 Villupuram Developer. All rights reserved.
          </p>
          <p className="footer-copy" style={{ opacity: 0.6 }}>
            Designed &amp; Developed in Villupuram.
          </p>
        </div>
      </div>
    </footer>
  );
}
