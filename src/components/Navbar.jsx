import React, { useState, useEffect } from 'react';
const logoImg = '/logo.webp';
import { ArrowRight, Phone } from './Icons';
import { useConfig } from '../context/ConfigContext';

export default function Navbar({ onContactClick, activeSection }) {
  const { config } = useConfig();
  const phone = config?.brand?.phone || '+91 63793 48861';
  const phoneTel = phone.replace(/[^0-9+]/g, '');

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        
        {/* Left: Logo Brand */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src={logoImg} alt="Villupuram Developer Logo" className="navbar-logo" width="188" height="75" fetchpriority="high" />
        </a>

        <div className="navbar-divider divider-desktop"></div>

        {/* Center: Navigation Links */}
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`navbar-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
          
          {/* Mobile Only Contact Info inside menu drawer */}
          <li className="mobile-only-contact" style={{ display: 'none', marginTop: '2rem' }}>
            <a href={`tel:${phoneTel}`} className="navbar-contact">
              <span className="contact-icon-wrapper">
                <Phone size={14} />
              </span>
              <div className="contact-details">
                <span className="contact-talk">Let's Talk</span>
                <span className="contact-phone">{phone}</span>
              </div>
            </a>
          </li>
        </ul>

        <div className="navbar-divider divider-desktop"></div>

        {/* Right: Contact info + Button */}
        <div className="navbar-actions">
          
          <a href={`tel:${phoneTel}`} className="navbar-contact">
            <span className="contact-icon-wrapper">
              <Phone size={14} />
            </span>
            <div className="contact-details">
              <span className="contact-talk">Let's Talk</span>
              <span className="contact-phone">{phone}</span>
            </div>
          </a>

          <div className="navbar-divider divider-desktop"></div>

          <button className="btn btn-primary navbar-cta-btn" onClick={onContactClick}>
            Start a Project <ArrowRight className="btn-icon" size={14} />
          </button>

        </div>

        {/* Hamburger Mobile Toggle */}
        <button 
          className={`navbar-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>
    </header>
  );
}
