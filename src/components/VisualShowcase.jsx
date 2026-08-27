import React, { useState } from 'react';
import { Sparkles, ExternalLink, ArrowRight } from './Icons';

import rjImg from '../assets/rj (1).png';
import versatileImg from '../assets/project_versatile.webp';
import synstarImg from '../assets/synstar.png';
import work1Img from '../assets/project_work1.webp';
import work2Img from '../assets/project_work2.webp';
import work3Img from '../assets/project_work3.webp';
import ecomImg from '../assets/service_ecom.webp';
import mobileImg from '../assets/service_responsive.webp';
import webappImg from '../assets/service_webapp.webp';

export default function VisualShowcase({ onContactClick }) {
  const [modalImg, setModalImg] = useState(null);

  // Row 1 Images
  const row1 = [
    { id: 'r1-1', title: 'RJ Ventures — Investment & Corporate Portal', img: rjImg, tag: 'Client Website' },
    { id: 'r1-2', title: 'Real-Time Telemetry & Cloud Dashboard', img: work2Img, tag: 'Cloud Platform' },
    { id: 'r1-3', title: 'Versatile Business School — Academic Portal', img: versatileImg, tag: 'Education Platform' },
    { id: 'r1-4', title: 'High-Conversion E-Commerce Storefront', img: ecomImg, tag: 'E-Commerce' },
    { id: 'r1-5', title: 'Synstar Staffing — Global Talent Platform', img: synstarImg, tag: 'Enterprise Portal' },
  ];

  // Row 2 Images
  const row2 = [
    { id: 'r2-1', title: 'Clean React 19 SPA Architecture', img: work1Img, tag: 'Web Solution' },
    { id: 'r2-2', title: 'Fluid 60fps Mobile-First Touch Interface', img: mobileImg, tag: 'Mobile UI' },
    { id: 'r2-3', title: 'High-Performance Web Application', img: webappImg, tag: 'Custom App' },
    { id: 'r2-4', title: 'Full-Stack Enterprise Database Engine', img: work3Img, tag: 'Full-Stack' },
    { id: 'r2-5', title: 'RJ Ventures — Brand Authority & Portfolio', img: rjImg, tag: 'Live Launch' },
  ];

  return (
    <section id="gallery" className="visual-wall-section">
      
      {/* Section Header */}
      <div className="container visual-wall-header">
        <div className="pro-pill-badge">
          <Sparkles size={13} color="#f59e0b" />
          <span>05 / DIGITAL CRAFT VISUALS</span>
        </div>

        <h2 className="pro-section-title">
          IMMERSIVE INTERFACES.<br />
          <span className="pro-gradient-text">Engineered For Visual Impact.</span>
        </h2>
        
        <p className="pro-section-desc">
          Live snapshots of our high-speed digital architectures, mobile-first platforms, and enterprise dashboards.
        </p>
      </div>

      {/* Infinite Auto-Scrolling Visual Wall (No Cards) */}
      <div className="visual-wall-wrapper">
        
        {/* Left & Right Ambient Fade Mask */}
        <div className="wall-fade-mask left"></div>
        <div className="wall-fade-mask right"></div>

        {/* Row 1: Scrolls Left */}
        <div className="marquee-row marquee-scroll-left">
          <div className="marquee-track">
            {[...row1, ...row1, ...row1].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="visual-wall-item"
                onClick={() => setModalImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="visual-wall-img" 
                  width="480"
                  height="270"
                  loading="lazy"
                  decoding="async"
                />
                <div className="visual-wall-overlay">
                  <span className="visual-wall-tag">{item.tag}</span>
                  <span className="visual-wall-title">{item.title}</span>
                  <span className="visual-wall-zoom">
                    <ExternalLink size={12} />
                    <span>Zoom</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="marquee-row marquee-scroll-right">
          <div className="marquee-track">
            {[...row2, ...row2, ...row2].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="visual-wall-item"
                onClick={() => setModalImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="visual-wall-img" 
                  width="480"
                  height="270"
                  loading="lazy"
                  decoding="async"
                />
                <div className="visual-wall-overlay">
                  <span className="visual-wall-tag">{item.tag}</span>
                  <span className="visual-wall-title">{item.title}</span>
                  <span className="visual-wall-zoom">
                    <ExternalLink size={12} />
                    <span>Zoom</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Lightbox Zoom Modal */}
      {modalImg && (
        <div className="bento-modal-overlay" onClick={() => setModalImg(null)}>
          <div className="bento-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="bento-modal-close" onClick={() => setModalImg(null)}>✕</button>
            <img src={modalImg} alt="Full View" className="bento-modal-img" />
          </div>
        </div>
      )}

    </section>
  );
}
