import React, { useState, useRef } from 'react';
import { 
  ArrowRight, Globe, Sparkles, Zap, Monitor, ShoppingBag, 
  Smartphone, Cpu, ShoppingCart, CheckCircle2, Terminal, Server, 
  Gauge, MapPin, Search, Plus, Minus
} from './Icons';

export default function Services({ onContactClick }) {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const cardsRef = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const toggleExpand = (num) => {
    setExpandedCard(expandedCard === num ? null : num);
  };

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'web', label: 'Websites & Mobile' },
    { id: 'ecom', label: 'E-Commerce' },
    { id: 'apps', label: 'Custom Apps & APIs' },
    { id: 'seo', label: 'SEO & Growth' }
  ];

  const servicesData = [
    {
      num: '01',
      category: 'web',
      title: 'Business Websites',
      desc: 'High-converting, bespoke web applications engineered for brand authority, fluid micro-interactions, and instant page loads.',
      pillText: 'Google Speed 100/100',
      url: 'villupuramdeveloper.com',
      icon: <Monitor size={22} className="service-icon-sm" />,
      techTags: ['React 19 & Vite 8', 'Ultra-Responsive UI', 'Custom CSS Tokens'],
      deliverables: [
        'Custom React SPA Architecture',
        'Mobile-First Touch Optimization',
        'SSL HTTPS & Edge CDN Setup',
        'Lead Capture Form Integration',
        '1 Year Free Technical Maintenance'
      ],
      type: 'speed'
    },
    {
      num: '02',
      category: 'ecom',
      title: 'E-Commerce Stores',
      desc: 'High-performance online storefronts equipped with UPI instant checkout, product filters, cart management, and payment gateways.',
      pillText: 'UPI & Payment Ready',
      url: 'store.villupuramdeveloper.com',
      icon: <ShoppingBag size={22} className="service-icon-sm" />,
      techTags: ['Razorpay & UPI Instant', 'Product Catalog DB', 'Order Management'],
      deliverables: [
        'Instant UPI & Card Checkout Flow',
        'Dynamic Inventory & Order System',
        'Discount Code & Coupon Engine',
        'Automated Customer Invoice Email',
        'Mobile Shopping App-Like UX'
      ],
      type: 'ecommerce'
    },
    {
      num: '03',
      category: 'web',
      title: 'Mobile Responsive UX',
      desc: 'Websites engineered to look breathtaking and navigate effortlessly across desktop, tablet, and mobile devices.',
      pillText: 'Fluid Viewport UI',
      url: 'mobile.villupuramdeveloper.com',
      icon: <Smartphone size={22} className="service-icon-sm" />,
      techTags: ['100% Fluid Layouts', 'Touch UX Micro-Animations', 'PWA Support'],
      deliverables: [
        'Adaptive Layout Grid Mathematics',
        'High-DPI Retina Graphic Assets',
        'Progressive Web App (PWA) Support',
        'Cross-Browser & iOS Testing',
        'Gesture-Driven Mobile Menus'
      ],
      type: 'responsive'
    },
    {
      num: '04',
      category: 'apps',
      title: 'Custom Web Apps & Dashboards',
      desc: 'Bespoke React control panels, administrative analytics dashboards, cloud API backends, and database integrations.',
      pillText: 'Full-Stack React & Node',
      url: 'app.villupuramdeveloper.com',
      icon: <Cpu size={22} className="service-icon-sm" />,
      techTags: ['Node.js & Express REST', 'MongoDB / PostgreSQL', 'Admin Analytics'],
      deliverables: [
        'Secure Role-Based Authentication',
        'Real-Time Analytics & Graphs',
        'REST / GraphQL API Endpoints',
        'Automated Cloud Backups',
        'Custom Admin Control Panel'
      ],
      type: 'webapp'
    },
    {
      num: '05',
      category: 'seo',
      title: 'SEO & Core Web Vitals',
      desc: 'Search engine optimization and performance tuning engineered to rank your business #1 on Google for regional search queries.',
      pillText: 'Rank #1 on Google',
      url: 'seo.villupuramdeveloper.com',
      icon: <Gauge size={22} className="service-icon-sm" />,
      techTags: ['JSON-LD Local Schema', 'llms.txt Agent Standard', 'Meta Protocol'],
      deliverables: [
        'Google Search Console Verification',
        'Local Business Structured Data',
        'llms.txt AI Agent Specification',
        'Image WebP Compression Pipeline',
        'Sitemap & Robots Protocol'
      ],
      type: 'seo'
    },
    {
      num: '06',
      category: 'seo',
      title: 'Local Business Digitalization',
      desc: 'Complete digital transformation for regional enterprises across Villupuram, Chennai, Puducherry, and Tamil Nadu.',
      pillText: 'Tamil Nadu Regional Reach',
      url: 'local.villupuramdeveloper.com',
      icon: <MapPin size={22} className="service-icon-sm" />,
      techTags: ['Google Maps Local SEO', 'Tamil/English Multi-Lingual', 'WhatsApp Integration'],
      deliverables: [
        'Google My Business Optimization',
        'Direct WhatsApp Chat Trigger',
        'Multi-lingual Tamil/English UI',
        'Click-to-Call Contact Buttons',
        'Regional Business Directory Listing'
      ],
      type: 'local'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  /* Render 6 Micro-UI Real Workflow Previews */
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
              <Globe size={10} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-speed-content">
            <div className="speed-code-line">
              <Terminal size={12} color="#ff6b00" />
              <span>Load Time: <strong style={{ color: '#22c55e' }}>0.2s⚡</strong></span>
            </div>
            <div className="speed-score-pill">
              <CheckCircle2 size={12} color="#22c55e" />
              <span>Google PageSpeed Score: <strong>100/100</strong></span>
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
              <Globe size={10} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-ecom-content">
            <div className="ecom-cart-row">
              <ShoppingCart size={12} color="#ff6b00" />
              <span>Cart Total: ₹14,999</span>
            </div>
            <div className="ecom-upi-badge">
              <span>GPay / PhonePe / UPI Verified ✓</span>
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
              <Globe size={10} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-resp-content">
            <span className="resp-pill">🖥️ Desktop</span>
            <span className="resp-pill">💻 Tablet</span>
            <span className="resp-pill active">📱 Mobile 60fps</span>
          </div>
        </div>
      );
    }

    if (service.type === 'webapp') {
      return (
        <div className="unique-micro-box app-micro-box">
          <div className="micro-ui-header">
            <div className="micro-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="micro-url">
              <Globe size={10} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-app-content">
            <div className="app-api-line">
              <Server size={12} color="#38bdf8" />
              <span>API Gateway: <strong>200 OK (8ms)</strong></span>
            </div>
            <div className="app-uptime-badge">
              <span>Uptime SLA: 99.99%</span>
            </div>
          </div>
        </div>
      );
    }

    if (service.type === 'seo') {
      return (
        <div className="unique-micro-box seo-micro-box">
          <div className="micro-ui-header">
            <div className="micro-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="micro-url">
              <Globe size={10} color="#ff6b00" />
              <span>{service.url}</span>
            </div>
          </div>
          <div className="micro-seo-content">
            <div className="seo-rank-item">
              <Search size={12} color="#ff6b00" />
              <span>Google Rank: <strong style={{ color: '#22c55e' }}>#1 Position</strong></span>
            </div>
            <div className="seo-badge-row">
              <span className="seo-chip">Structured JSON-LD</span>
              <span className="seo-chip">llms.txt AI Ready</span>
            </div>
          </div>
        </div>
      );
    }

    // Local Business
    return (
      <div className="unique-micro-box local-micro-box">
        <div className="micro-ui-header">
          <div className="micro-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="micro-url">
            <Globe size={10} color="#ff6b00" />
            <span>{service.url}</span>
          </div>
        </div>
        <div className="micro-local-content">
          <div className="local-reach-line">
            <MapPin size={12} color="#ff6b00" />
            <span>Serving: <strong>Villupuram • Chennai • Puducherry</strong></span>
          </div>
          <div className="local-wa-chip">
            <span>WhatsApp Leads Active 💬</span>
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
          <div className="section-label-group">
            <span className="section-label">02 / OUR SERVICES</span>
            <span className="services-badge-pulse">
              <span className="pulse-dot-green"></span> 6 Tailored Engineering Solutions
            </span>
          </div>
          <h2 className="section-title">
            Services Built for<br />
            <span className="gradient-text">High-Converting Digital Growth.</span>
          </h2>
          <p className="services-subtitle">
            From modern responsive websites to enterprise e-commerce portals and custom React applications, we craft software engineered to win customers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="services-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`services-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
              {activeTab === cat.id && <Sparkles size={12} className="tab-sparkle" />}
            </button>
          ))}
        </div>

        {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="services-modern-grid">
          {filteredServices.map((service, index) => {
            const isExpanded = expandedCard === service.num;
            return (
              <div
                key={service.num}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`modern-service-card ${isExpanded ? 'expanded' : ''}`}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Ambient Mouse-Tracking Spotlight Glow */}
                <div className="card-ambient-glow"></div>

                {/* Card Top Header */}
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

                {/* Service Description */}
                <p className="service-card-desc">{service.desc}</p>

                {/* Interactive Micro-UI Workflow Widget */}
                {renderUniqueMicroUI(service)}

                {/* Tech Chips */}
                <div className="service-tech-tags">
                  {service.techTags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tech-chip">
                      <Zap size={10} color="#ff6b00" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable Deliverables Accordion Trigger */}
                <div className="service-deliverables-toggle" onClick={() => toggleExpand(service.num)}>
                  <span>View Included Deliverables ({service.deliverables.length})</span>
                  {isExpanded ? <Minus size={14} color="#ff6b00" /> : <Plus size={14} color="#ff6b00" />}
                </div>

                {/* Expandable Deliverables List */}
                {isExpanded && (
                  <ul className="service-deliverables-list">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx}>
                        <CheckCircle2 size={13} color="#22c55e" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Inquiry Action Button */}
                <button className="service-link-btn" onClick={onContactClick}>
                  <span>Inquire About {service.title}</span>
                  <ArrowRight size={15} className="service-btn-arrow" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Enterprise Banner */}
        <div className="services-bottom-cta">
          <div className="cta-left">
            <h4>Need a Custom Enterprise Solution or Tailored System?</h4>
            <p>We engineer custom React/Node backends, API integrations, and database portals tailored to your exact business requirements.</p>
          </div>
          <button className="btn btn-primary" onClick={onContactClick}>
            Get a Free Consultation <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
