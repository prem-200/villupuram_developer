import React from 'react';
import log1Img from '../assets/log1.webp';
import { Sparkles, Code2 } from './Icons';

export default function TrustIntro() {
  return (
    <section className="trust-section reveal reveal-scale-in">
      <div className="container trust-split-grid">
        
        {/* Left Column: Brand Tagline */}
        <div className="trust-left-content">
          <span className="trust-label">01 / WHAT WE DO</span>
          <h2 className="trust-title">
            YOUR BUSINESS. YOUR WEBSITE. <span className="gradient-text">YOUR DIGITAL PRESENCE.</span>
          </h2>
          <div className="trust-accent-line"></div>
          <p className="trust-desc">
            Whether you're launching a new business or taking an existing business online, we create modern digital experiences designed around your goals.
          </p>
        </div>

        {/* Right Column: 3D Logo Showcase Visual */}
        <div className="trust-right-visual reveal reveal-scale-in">
          <div className="trust-3d-container">
            <div className="trust-3d-card">
              <div className="trust-card-glow"></div>
              <img src={log1Img} alt="Villupuram Developer Brand Badge" className="trust-3d-img" width="400" height="240" loading="lazy" decoding="async" />
            </div>
            
            {/* Floating Visual Badges */}
            <div className="floating-element fe-1" style={{ top: '15%', left: '5px' }}>
              <Code2 size={12} className="text-orange" style={{ color: 'var(--accent-blue)' }} />
              <span>Tailored React</span>
            </div>
            
            <div className="floating-element fe-2" style={{ bottom: '15%', right: '5px' }}>
              <Sparkles size={12} className="text-orange" style={{ color: 'var(--accent-violet)' }} />
              <span>Modern Design</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
