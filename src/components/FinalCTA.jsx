import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from './Icons';

export default function FinalCTA({ onContactClick }) {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate offset when the section enters the screen
      const viewportHeight = window.innerHeight;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        setOffset((rect.top - viewportHeight) * 0.12); // Speed multiplier
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="final-cta-section reveal reveal-scale-in">
      <div className="container">
        <div className="final-cta-box" style={{ position: 'relative', overflow: 'hidden' }}>
          
          {/* Procedural Parallax Tech Background SVG */}
          <div 
            className="final-cta-parallax-bg"
            style={{ 
              position: 'absolute',
              top: '-10%',
              left: 0,
              width: '100%',
              height: '120%',
              pointerEvents: 'none',
              transform: `translateY(${offset}px) scale(1.15)`,
              transition: 'transform 0.1s ease-out',
              zIndex: 1,
              opacity: 0.6
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cta-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#ffa800" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
                
                <pattern id="cta-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1"/>
                </pattern>
              </defs>
              
              {/* Technical Grid Overlay */}
              <rect width="100%" height="100%" fill="url(#cta-grid-pattern)" />
              
              {/* Glowing core */}
              <circle cx="400" cy="200" r="280" fill="url(#cta-glow-grad)" />
              
              {/* Circuit Lines */}
              <g stroke="rgba(255, 107, 0, 0.2)" strokeWidth="1" strokeLinecap="round">
                <path d="M 120 100 H 220 L 250 130 V 220" />
                <path d="M 680 300 H 580 L 550 270 V 180" />
                <path d="M 180 300 H 280 L 310 270 V 210" />
                <path d="M 620 100 H 520 L 490 130 V 230" />
              </g>
              
              {/* Glowing Circuit Node points */}
              <circle cx="250" cy="130" r="3" fill="#ff6b00" style={{ filter: 'drop-shadow(0 0 5px #ff6b00)' }} />
              <circle cx="550" cy="270" r="3" fill="#ffa800" style={{ filter: 'drop-shadow(0 0 5px #ffa800)' }} />
              <circle cx="310" cy="270" r="3" fill="#ffa800" style={{ filter: 'drop-shadow(0 0 5px #ffa800)' }} />
              <circle cx="490" cy="130" r="3" fill="#ff6b00" style={{ filter: 'drop-shadow(0 0 5px #ff6b00)' }} />
            </svg>
          </div>

          <div className="final-cta-glow" style={{ zIndex: 1 }}></div>
          
          {/* Card Content with higher zIndex */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2>
              HAVE AN IDEA?<br />
              <span className="gradient-text">LET'S BUILD IT.</span>
            </h2>
            <p>
              Tell us what you're building. We'll help turn your idea into a professional digital experience that grows your business.
            </p>
            <button className="btn btn-primary" onClick={onContactClick}>
              Start a Project <ArrowRight className="btn-icon" size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
