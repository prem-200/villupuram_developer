import React, { useState, useEffect } from 'react';
import logoImg from '../assets/header.png';
import { ArrowRight, Phone } from './Icons';
import { useConfig } from '../context/ConfigContext';
import { trackLiveAction } from '../utils/visitorTracker';

export default function Navbar({ onContactClick, activeSection, onNavigatePricing }) {
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

  const showOnHome = config?.pricingSettings?.showOnHomePage !== false;
  const enableStandalone = config?.pricingSettings?.enableStandalonePage !== false;
  const hasPricingEnabled = showOnHome || enableStandalone;

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    ...(hasPricingEnabled ? [{ name: 'Pricing', href: '#pricing', isRoute: !showOnHome && enableStandalone }] : []),
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.isRoute && onNavigatePricing) {
      trackLiveAction('Navigated to Dedicated Pricing Page', '/pricing');
      onNavigatePricing();
      return;
    }

    trackLiveAction(`Navigated to ${item.name || item} Section`, item.href || '/');

    const target = document.querySelector(item.href || item);
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
                  onClick={(e) => handleLinkClick(e, item)}
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
          
          <a 
            href={`tel:${phoneTel}`} 
            className="navbar-contact"
            onClick={() => trackLiveAction(`Triggered Direct Call to ${phone}`, '/')}
          >
            <span className="contact-icon-wrapper">
              <Phone size={14} />
            </span>
            <div className="contact-details">
              <span className="contact-talk">Let's Talk</span>
              <span className="contact-phone">{phone}</span>
            </div>
          </a>

          <div className="navbar-divider divider-desktop"></div>

          <button 
            className="btn btn-primary navbar-cta-btn" 
            onClick={() => {
              trackLiveAction('Clicked Navbar "Start a Project" Button', '/');
              onContactClick();
            }}
          >
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
