import React from 'react';
import { ArrowRight, MapPin } from './Icons';
import tnMap from '../assets/tamilnadu_map.webp';

export default function LocalBusiness({ onContactClick }) {
  return (
    <section className="local-section">
      <div className="container local-grid">
        <div className="local-content reveal reveal-slide-left">
          <span className="section-label">Targeted Solutions</span>
          <h2 className="local-title">
            YOUR LOCAL BUSINESS<br />
            DESERVES A GREAT WEBSITE.
          </h2>
          <p className="local-desc">
            From shops and restaurants to professional service providers and growing startups, we help local brands build a premium digital presence that rivals national enterprises.
          </p>
          <button className="btn btn-primary" onClick={onContactClick}>
            Build My Website <ArrowRight className="btn-icon" size={16} />
          </button>
        </div>

        {/* Tamil Nadu Map Visual */}
        <div className="local-visual reveal reveal-scale-in">
          <div className="tn-map-container">
            <img src={tnMap} alt="Tamil Nadu Map" className="tn-map-image" width="450" height="600" loading="lazy" decoding="async" />
          </div>

          <div className="floating-element local-badge">
            <MapPin size={14} />
            <span>Serving Tamil Nadu &amp; Beyond</span>
          </div>
        </div>
      </div>
    </section>
  );
}
