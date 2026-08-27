import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, ShoppingBag, BarChart3, Layout, Layers } from './Icons';

const slidesData = [
  {
    id: 0,
    badge: 'VILLUPURAM DEVELOPER — WEB SOLUTIONS',
    titleLine1: 'WE BUILD DIGITAL',
    titleLine2: 'EXPERIENCES THAT',
    titleGradient: 'GROW BUSINESSES.',
    desc: 'Modern websites and digital solutions built for businesses that want to look professional, reach more customers, and grow online.',
    mockupType: 'business',
    url: 'villupuramdeveloper.com'
  },
  {
    id: 1,
    badge: 'VILLUPURAM DEVELOPER — E-COMMERCE',
    titleLine1: 'SELL ONLINE WITH',
    titleLine2: 'HIGH-CONVERTING',
    titleGradient: 'DIGITAL STORES.',
    desc: 'Lightning-fast checkout, custom product filters, and secure shopping carts built to turn visitor clicks into customer sales.',
    mockupType: 'ecommerce',
    url: 'store.villupuramdeveloper.com'
  },
  {
    id: 2,
    badge: 'VILLUPURAM DEVELOPER — CUSTOM APPS',
    titleLine1: 'TAILORED SYSTEMS',
    titleLine2: 'BUILT AROUND YOUR',
    titleGradient: 'SPECIFIC GOALS.',
    desc: 'Bespoke React applications, administrative dashboards, and secure backend solutions engineered for your operational growth.',
    mockupType: 'custom',
    url: 'app.villupuramdeveloper.com'
  }
];

export default function Hero({ onContactClick }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slidesData.length]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slidesData.length);
      }, 6000);
    }
  };

  const scrollToProjects = () => {
    const target = document.querySelector('#projects');
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

  /* Render Slide-Specific Laptop Skeleton UI */
  const renderLaptopSkeleton = (type) => {
    if (type === 'ecommerce') {
      return (
        <div className="skeleton-ui-container">
          {/* E-Commerce Header */}
          <div className="skeleton-nav-row">
            <div className="skeleton-box skeleton-logo" style={{ width: '45px' }}></div>
            <div className="skeleton-box" style={{ width: '90px', height: '10px', borderRadius: '10px' }}></div>
            <div className="skeleton-box" style={{ width: '16px', height: '12px', borderRadius: '3px' }}></div>
          </div>
          {/* Promo Sale Banner */}
          <div className="skeleton-box" style={{ width: '100%', height: '38px', borderRadius: '6px', background: 'linear-gradient(90deg, rgba(255,107,0,0.25), rgba(255,168,0,0.4), rgba(255,107,0,0.25))' }}></div>
          {/* Product Grid */}
          <div className="skeleton-cards-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-box sk-img" style={{ height: '32px' }}></div>
                <div className="skeleton-box sk-line-1"></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="skeleton-box" style={{ width: '18px', height: '6px' }}></div>
                  <div className="skeleton-box" style={{ width: '22px', height: '10px', borderRadius: '2px', background: '#ff6b00' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (type === 'custom') {
      return (
        <div className="skeleton-ui-container">
          {/* Top Admin Header */}
          <div className="skeleton-nav-row">
            <div className="skeleton-box" style={{ width: '60px', height: '10px' }}></div>
            <div className="skeleton-box" style={{ width: '30px', height: '10px', borderRadius: '50%' }}></div>
          </div>
          {/* KPI Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            <div className="skeleton-card" style={{ padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '30px', height: '5px' }}></div>
              <div className="skeleton-box" style={{ width: '40px', height: '12px', background: '#ff6b00' }}></div>
            </div>
            <div className="skeleton-card" style={{ padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '30px', height: '5px' }}></div>
              <div className="skeleton-box" style={{ width: '40px', height: '12px', background: '#38bdf8' }}></div>
            </div>
            <div className="skeleton-card" style={{ padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '30px', height: '5px' }}></div>
              <div className="skeleton-box" style={{ width: '40px', height: '12px', background: '#22c55e' }}></div>
            </div>
          </div>
          {/* Chart Graph & Table Section */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6px', marginTop: '4px' }}>
            <div className="skeleton-card" style={{ height: '65px', display: 'flex', alignItems: 'flex-end', gap: '4px', padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '15%', height: '40%' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '75%', background: '#ff6b00' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '50%' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '90%', background: '#ffa800' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '60%' }}></div>
            </div>
            <div className="skeleton-card" style={{ height: '65px', gap: '4px', padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '100%', height: '8px' }}></div>
              <div className="skeleton-box" style={{ width: '100%', height: '8px' }}></div>
              <div className="skeleton-box" style={{ width: '100%', height: '8px' }}></div>
            </div>
          </div>
        </div>
      );
    }

    // Default Business Web Solutions Layout
    return (
      <div className="skeleton-ui-container">
        {/* Skeleton Nav Bar */}
        <div className="skeleton-nav-row">
          <div className="skeleton-box skeleton-logo"></div>
          <div className="skeleton-nav-links">
            <div className="skeleton-box skeleton-link"></div>
            <div className="skeleton-box skeleton-link"></div>
            <div className="skeleton-box skeleton-link"></div>
          </div>
          <div className="skeleton-box skeleton-btn-sm"></div>
        </div>

        {/* Skeleton Hero Section */}
        <div className="skeleton-hero-block">
          <div className="skeleton-left">
            <div className="skeleton-box skeleton-tag"></div>
            <div className="skeleton-box skeleton-h1"></div>
            <div className="skeleton-box skeleton-h2"></div>
            <div className="skeleton-box skeleton-p"></div>
            <div className="skeleton-btn-group">
              <div className="skeleton-box skeleton-btn-lg"></div>
              <div className="skeleton-box skeleton-btn-md"></div>
            </div>
          </div>
          
          <div className="skeleton-right">
            <div className="skeleton-box skeleton-visual-card">
              <div className="skeleton-circle-glow"></div>
            </div>
          </div>
        </div>

        {/* Skeleton Grid Cards */}
        <div className="skeleton-cards-grid">
          <div className="skeleton-card">
            <div className="skeleton-box sk-img"></div>
            <div className="skeleton-box sk-line-1"></div>
            <div className="skeleton-box sk-line-2"></div>
          </div>
          <div className="skeleton-card">
            <div className="skeleton-box sk-img"></div>
            <div className="skeleton-box sk-line-1"></div>
            <div className="skeleton-box sk-line-2"></div>
          </div>
          <div className="skeleton-card">
            <div className="skeleton-box sk-img"></div>
            <div className="skeleton-box sk-line-1"></div>
            <div className="skeleton-box sk-line-2"></div>
          </div>
        </div>
      </div>
    );
  };

  /* Render Slide-Specific Mobile Phone Skeleton UI */
  const renderMobileSkeleton = (type) => {
    if (type === 'ecommerce') {
      return (
        <div className="skeleton-mobile-ui">
          <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '4px' }}></div>
          <div className="skeleton-box" style={{ width: '80%', height: '8px' }}></div>
          <div className="skeleton-box" style={{ width: '40%', height: '10px', background: '#ff6b00' }}></div>
          <div className="skeleton-box sk-mob-cta" style={{ marginTop: 'auto' }}></div>
        </div>
      );
    }

    if (type === 'custom') {
      return (
        <div className="skeleton-mobile-ui">
          <div className="skeleton-box" style={{ width: '100%', height: '24px' }}></div>
          <div className="skeleton-box" style={{ width: '100%', height: '45px', background: 'rgba(255,107,0,0.15)' }}></div>
          <div className="skeleton-box" style={{ width: '100%', height: '35px' }}></div>
        </div>
      );
    }

    return (
      <div className="skeleton-mobile-ui">
        <div className="skeleton-box sk-mob-banner"></div>
        <div className="skeleton-box sk-mob-title"></div>
        <div className="skeleton-mob-grid">
          <div className="skeleton-box sk-mob-card"></div>
          <div className="skeleton-box sk-mob-card"></div>
        </div>
        <div className="skeleton-box sk-mob-cta"></div>
      </div>
    );
  };

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', height: '100%' }}>
        
        {/* Slides Wrapper */}
        <div className="hero-carousel-wrapper">
          {slidesData.map((slide, index) => {
            const isActive = activeSlide === index;
            return (
              <div 
                key={slide.id} 
                className={`hero-slide-item ${isActive ? 'active' : ''}`}
              >
                {/* Left Slide Info */}
                <div className="hero-content">
                  <div className="hero-badge">
                    <span></span>
                    {slide.badge}
                  </div>
                  
                  <h1 className="hero-title">
                    {slide.titleLine1}<br />
                    {slide.titleLine2}<br />
                    <span className="gradient-text">{slide.titleGradient}</span>
                  </h1>
                  
                  <p className="hero-desc">
                    {slide.desc}
                  </p>
                  
                  <div className="hero-actions">
                    <button className="btn btn-primary" onClick={onContactClick}>
                      Start Your Project <ArrowRight className="btn-icon" size={16} />
                    </button>
                    <button className="btn btn-secondary" onClick={scrollToProjects}>
                      View Our Work
                    </button>
                  </div>
                </div>

                {/* Right Slide 3D Interactive Skeleton Wireframe Visual (Clean without Floating Badges) */}
                <div className="hero-visual reveal reveal-scale-in">
                  
                  {/* Glowing Backlight Aura */}
                  <div className="hero-visual-glow"></div>

                  <div className="mockup-container">
                    
                    {/* 3D Laptop Screen */}
                    <div className="laptop-3d">
                      <div className="laptop-screen">
                        <div className="laptop-screen-content">
                          
                          {/* Browser Window Header */}
                          <div className="screen-header">
                            <div className="screen-dots">
                              <span className="screen-dot dot-red"></span>
                              <span className="screen-dot dot-yellow"></span>
                              <span className="screen-dot dot-green"></span>
                            </div>
                            <div className="screen-address-bar">
                              <Globe size={10} className="address-icon" />
                              <span>{slide.url}</span>
                            </div>
                          </div>

                          {/* Dynamic Skeleton UI Wireframe per Slide */}
                          {renderLaptopSkeleton(slide.mockupType)}

                        </div>
                      </div>
                      <div className="laptop-keyboard"></div>
                    </div>

                    {/* 3D Smartphone Device Mockup */}
                    <div className="phone-3d">
                      <div className="phone-screen">
                        <div className="phone-notch"></div>
                        {renderMobileSkeleton(slide.mockupType)}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Slide Pagination Dots Indicator */}
        <div className="hero-dots-container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '2rem' }}>
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              style={{
                width: activeSlide === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: activeSlide === idx ? 'var(--accent-blue)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
