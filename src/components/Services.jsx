import React, { useRef } from 'react';
import { ArrowRight, Globe, Sparkles, Zap, Monitor, ShoppingBag, Smartphone, Cpu, ShoppingCart, CheckCircle2, Terminal, Server } from './Icons';

export default function Services({ onContactClick }) {
  const cardsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleMouseMove = (e, index) => {
    const card = cardsRef[index].current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const servicesData = [
    {
      num: '01',
      title: 'Business Websites',
      desc: 'High-converting, professional websites engineered to establish authority and generate customer leads.',
      pillText: 'Fast & Responsive',
      url: 'villupuramdeveloper.com',
      icon: <Monitor size={22} className="service-icon-sm" />,
      techTags: ['React 18 Architecture', 'Google Speed 99+'],
      type: 'speed'
    },
    {
      num: '02',
      title: 'E-Commerce Stores',
      desc: 'Modern online storefronts with seamless checkout flows, UPI payments, and product catalogs.',
      pillText: 'Payment Ready',
      url: 'store.villupuramdeveloper.com',
      icon: <ShoppingBag size={22} className="service-icon-sm" />,
      techTags: ['Razorpay & UPI Instant', 'Product Cart System'],
      type: 'ecommerce'
    },
    {
      num: '03',
      title: 'Mobile Responsive',
      desc: 'Websites optimized to look stunning and perform flawlessly across all mobile & desktop screens.',
      pillText: 'Mobile First UI',
      url: 'mobile.villupuramdeveloper.com',
      icon: <Smartphone size={22} className="service-icon-sm" />,
      techTags: ['100% Fluid Viewport', 'Touch UX Optimization'],
      type: 'responsive'
    },
    {
      num: '04',
      title: 'Custom Web Apps',
      desc: 'Bespoke React dashboards, administrative control panels, and cloud API backend systems.',
      pillText: 'React & Node Stack',
      url: 'app.villupuramdeveloper.com',
      icon: <Cpu size={22} className="service-icon-sm" />,
      techTags: ['Node.js & Database', 'Admin Analytics Panel'],
      type: 'webapp'
    }
  ];

  /* Helper to Render 4 Completely Unique Micro-UI Real Workflow Previews */
  const renderUniqueMicroUI = (service) => {
    if (service.type === 'speed') {
      return (
        <div className="unique-micro-box speed-micro-box">
          <div className="micro-ui-header">
            <div className="micro-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="micro-url">
              <Globe size={8} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-speed-content">
            <div className="speed-code-line">
              <Terminal size={10} color="#ff6b00" />
              <span>&lt;Website speed=<strong>"0.3s"</strong> /&gt;</span>
            </div>
            <div className="speed-score-pill">
              <CheckCircle2 size={10} color="#22c55e" />
              <span>Google PageSpeed: <strong>100/100</strong></span>
            </div>
          </div>
        </div>
      );
    }

    if (service.type === 'ecommerce') {
      return (
        <div className="unique-micro-box ecom-micro-box">
          <div className="micro-ui-header">
            <div className="micro-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="micro-url">
              <Globe size={8} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-ecom-content">
            <div className="ecom-cart-row">
              <ShoppingCart size={11} color="#ff6b00" />
              <span>Cart: 1 Item (₹14,999)</span>
            </div>
            <div className="ecom-upi-badge">
              <span>UPI Paid ✓</span>
            </div>
          </div>
        </div>
      );
    }

    if (service.type === 'responsive') {
      return (
        <div className="unique-micro-box resp-micro-box">
          <div className="micro-ui-header">
            <div className="micro-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="micro-url">
              <Globe size={8} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-resp-content">
            <span className="resp-pill">🖥️ Desktop</span>
            <span className="resp-pill">💻 Tablet</span>
            <span className="resp-pill active">📱 Mobile</span>
          </div>
        </div>
      );
    }

    // Custom Web Apps (API & Dashboard)
    return (
      <div className="unique-micro-box app-micro-box">
        <div className="micro-ui-header">
          <div className="micro-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="micro-url">
            <Globe size={8} color="#ff6b00" />
            <span>{service.url}</span>
          </div>
        </div>
        <div className="micro-app-content">
          <div className="app-api-line">
            <Server size={10} color="#38bdf8" />
            <span>POST /api/v1/app <strong>200 OK</strong></span>
          </div>
          <div className="app-uptime-badge">
            <span>Uptime 99.99%</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="services-header-clean">
          <span className="section-label">02 / OUR SERVICES</span>
          <h2 className="section-title">
            Services Built for<br />
            <span className="gradient-text">Modern Digital Growth.</span>
          </h2>
        </div>

        {/* 2 Cards Per Line Grid (2x2 Grid) */}
        <div className="services-two-per-row-grid">
          {servicesData.map((service, index) => (
            <div
              key={service.num}
              ref={cardsRef[index]}
              className="two-card-service-item"
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Ambient Hover Backdrop Glow */}
              <div className="card-ambient-glow"></div>

              {/* Top Row: Icon + Service Title + Tag Pill + Number */}
              <div className="service-card-top-row">
                <div className="service-icon-badge">
                  {service.icon}
                </div>
                <div className="service-title-wrap">
                  <h3 className="service-card-title">{service.title}</h3>
                  <span className="service-pill-tag">
                    <Sparkles size={10} color="#ff6b00" />
                    {service.pillText}
                  </span>
                </div>
                <span className="service-num-pill">{service.num}</span>
              </div>

              {/* Concise Description */}
              <p className="service-card-desc">{service.desc}</p>

              {/* Unique Micro-UI Real Component Preview (NO Skeleton UI!) */}
              {renderUniqueMicroUI(service)}

              {/* Tech Badges */}
              <div className="service-tech-tags">
                {service.techTags.map((tag, tIdx) => (
                  <span key={tIdx} className="service-tech-chip">
                    <Zap size={10} color="#ff6b00" />
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Action Button */}
              <button className="service-link-btn" onClick={onContactClick}>
                <span>Inquire Now</span>
                <ArrowRight size={15} className="service-btn-arrow" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
