import React, { useState } from 'react';
import { ArrowRight, MapPin, Sparkles, CheckCircle2, Zap } from './Icons';
import tnDistrictsMap from '../assets/tamilnadu_districts.webp';

export default function LocalBusiness({ onContactClick }) {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const coverageHighlights = [
    'Villupuram HQ • Serving All 38 Districts',
    'Bilingual Tamil & English CMS Support',
    'Instant UPI QR & Razorpay Checkout Integration'
  ];

  // Geographically mapped key district blips
  const districtNodes = [
    { id: 'villupuram', name: 'VILLUPURAM (HQ)', x: 68, y: 36, isHQ: true, stat: 'Core Development Lab' },
    { id: 'chennai', name: 'Chennai', x: 80, y: 18, stat: 'Fast Edge Node • 50+ Clients' },
    { id: 'cuddalore', name: 'Cuddalore', x: 72, y: 43, stat: 'E-Commerce & Retail' },
    { id: 'salem', name: 'Salem', x: 44, y: 40, stat: 'Manufacturing ERP' },
    { id: 'coimbatore', name: 'Coimbatore', x: 28, y: 51, stat: 'Tech Startups & Engineering' },
    { id: 'trichy', name: 'Tiruchirappalli', x: 53, y: 52, stat: 'Educational & Healthcare Portals' },
    { id: 'madurai', name: 'Madurai', x: 43, y: 66, stat: 'B2B Wholesale & Billing' },
    { id: 'tirunelveli', name: 'Tirunelveli', x: 38, y: 80, stat: 'Mobile-First Web Apps' }
  ];

  return (
    <section className="local-section">
      <div className="container local-grid">
        
        {/* Left: Clean Content */}
        <div className="local-content reveal reveal-slide-left">
          <span className="section-label">
            <Sparkles size={12} color="#f59e0b" style={{ marginRight: '6px' }} />
            Tamil Nadu Regional Expansion
          </span>
          
          <h2 className="local-title">
            YOUR LOCAL BUSINESS<br />
            DESERVES A GREAT WEBSITE.
          </h2>
          
          <p className="local-desc">
            We help ambitious local brands and businesses across Tamil Nadu engineer premium web platforms that rival national enterprises.
          </p>

          <div className="local-highlights-list">
            {coverageHighlights.map((item, idx) => (
              <div key={idx} className="local-highlight-item">
                <CheckCircle2 size={16} color="#f59e0b" className="highlight-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="local-cta-wrap">
            <button className="btn btn-primary" onClick={onContactClick}>
              <span>Launch Your Website</span>
              <ArrowRight className="btn-icon" size={15} />
            </button>
          </div>
        </div>

        {/* Right: Clean, Focused Animated Map Card */}
        <div className="local-visual reveal reveal-scale-in">
          <div className="tn-clean-map-card">
            
            {/* Minimal Header */}
            <div className="tn-clean-header">
              <div className="tn-clean-live-pill">
                <span className="tn-live-dot"></span>
                <span>STATEWIDE COVERAGE • 38 DISTRICTS</span>
              </div>
            </div>

            {/* Map Visual Stage */}
            <div className="tn-clean-map-stage">
              
              {/* Neon Cartography Image */}
              <img 
                src={tnDistrictsMap} 
                alt="Tamil Nadu Districts Map" 
                className="tn-clean-map-image" 
                width="600" 
                height="800" 
                loading="lazy" 
                decoding="async" 
              />

              {/* Vertical Laser Scanner Sweep */}
              <div className="tn-laser-scanner"></div>

              {/* SVG Connecting Rays from Villupuram HQ */}
              <svg className="tn-clean-svg-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="laserGradClean" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#00d8ff" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                {districtNodes.filter(d => !d.isHQ).map(d => (
                  <line 
                    key={d.id}
                    x1="68" 
                    y1="36" 
                    x2={d.x} 
                    y2={d.y} 
                    className="tn-laser-connection-line"
                  />
                ))}
              </svg>

              {/* District Animated Blip Nodes */}
              {districtNodes.map(d => {
                const isHovered = hoveredDistrict?.id === d.id;

                return (
                  <div 
                    key={d.id}
                    className={`tn-district-blip ${d.isHQ ? 'hq-core-blip' : ''} ${isHovered ? 'active' : ''}`}
                    style={{ left: `${d.x}%`, top: `${d.y}%` }}
                    onMouseEnter={() => setHoveredDistrict(d)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                  >
                    <div className="blip-ripple"></div>
                    <div className="blip-core-dot"></div>
                    <div className="blip-micro-tag">
                      <span>{d.name}</span>
                    </div>
                  </div>
                );
              })}

              {/* Dynamic Hover Tooltip */}
              {hoveredDistrict && (
                <div 
                  className="tn-district-live-tooltip"
                  style={{
                    left: `${hoveredDistrict.x}%`,
                    top: `${hoveredDistrict.y - 12}%`
                  }}
                >
                  <strong>{hoveredDistrict.name}</strong>
                  <span>{hoveredDistrict.stat}</span>
                </div>
              )}

            </div>

            {/* Clean Minimal Footer Badge */}
            <div className="tn-clean-footer-bar">
              <div className="clean-foot-item">
                <MapPin size={13} color="#ff6b00" />
                <span>HQ: Villupuram</span>
              </div>
              <div className="clean-foot-divider"></div>
              <div className="clean-foot-item">
                <Zap size={13} color="#10b981" />
                <span>Sub-300ms Speed</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
