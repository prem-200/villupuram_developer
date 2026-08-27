import React from 'react';
import log1Img from '../assets/log1.webp';
import { Sparkles, Code2, CheckCircle2, Zap } from './Icons';

export default function TrustIntro() {
  return (
    <section className="trust-section reveal reveal-scale-in">
      <div className="container trust-split-grid">
        
        {/* Left Column: 3D Logo Showcase Visual */}
        <div className="trust-left-visual reveal reveal-scale-in">
          <div className="trust-3d-container">
            <div className="trust-3d-card">
              <div className="trust-card-glow"></div>
              <img src={log1Img} alt="Villupuram Developer Brand Badge" className="trust-3d-img" width="400" height="240" loading="lazy" decoding="async" />
            </div>
            
            {/* Floating Visual Badges */}
            <div className="floating-element fe-1" style={{ top: '15%', left: '5px' }}>
              <Code2 size={14} style={{ color: '#f59e0b' }} />
              <span>Tailored React 19</span>
            </div>
            
            <div className="floating-element fe-2" style={{ bottom: '15%', right: '5px' }}>
              <Sparkles size={14} style={{ color: '#10b981' }} />
              <span>Glassmorphism UI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Brand Tagline & Text Content */}
        <div className="trust-right-content">
          <div className="pro-pill-badge">
            <Zap size={13} color="#f59e0b" />
            <span>01 / WHAT WE DO</span>
          </div>

          <h2 className="trust-title">
            YOUR BUSINESS. YOUR WEBSITE.<br />
            <span className="pro-gradient-text">YOUR DIGITAL PRESENCE.</span>
          </h2>

          <div className="trust-accent-line"></div>

          <p className="trust-desc">
            Whether you're launching a new business or taking an existing enterprise online, we engineer modern digital experiences designed around your revenue goals, speed benchmarks, and brand authority.
          </p>

          <div className="trust-stats-row">
            <div className="trust-stat-chip">
              <CheckCircle2 size={14} color="#10b981" />
              <span>Sub-300ms Speed Benchmark</span>
            </div>
            <div className="trust-stat-chip">
              <CheckCircle2 size={14} color="#10b981" />
              <span>100% Custom Responsive UI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
