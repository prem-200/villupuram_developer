import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, Monitor, ShoppingBag, 
  Smartphone, Cpu, Gauge, CheckCircle2, ChevronRight, Code2
} from './Icons';
import { useConfig } from '../context/ConfigContext';

import websiteImg from '../assets/service_website.webp';
import ecomImg from '../assets/service_ecom.webp';
import responsiveImg from '../assets/service_responsive.webp';
import webappImg from '../assets/service_webapp.webp';
import seoImg from '../assets/service_seo.webp';

export default function Services({ onContactClick }) {
  const { config } = useConfig();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Websites' },
    { id: 'ecom', label: 'E-Commerce' },
    { id: 'software', label: 'Custom Software' },
    { id: 'apps', label: 'Custom Apps' },
    { id: 'seo', label: 'SEO & Growth' }
  ];

  // Map dynamic services from config or fallback defaults
  const configServices = config?.services || [];

  const defaultServicesData = [
    {
      id: 'web-1',
      category: 'web',
      title: configServices[0]?.title || 'Business Websites',
      pillText: configServices[0]?.turnaround ? `Delivery: ${configServices[0].turnaround}` : 'Speed 100/100',
      desc: configServices[0]?.desc || 'High-converting React platforms built for brand authority & sub-300ms load speed.',
      icon: <Monitor size={18} />,
      image: websiteImg,
      techTags: ['React 19', 'Lighthouse 100'],
      features: configServices[0]?.features || [
        'Custom React SPA Architecture',
        'Mobile-First Responsive Layout',
        'SSL HTTPS & CDN Edge Setup'
      ]
    },
    {
      id: 'ecom-1',
      category: 'ecom',
      title: configServices[1]?.title || 'E-Commerce Stores',
      pillText: configServices[1]?.turnaround ? `Delivery: ${configServices[1].turnaround}` : 'UPI Checkout Ready',
      desc: configServices[1]?.desc || 'Modern online storefronts with instant UPI payments, catalog DB & order tracking.',
      icon: <ShoppingBag size={18} />,
      image: ecomImg,
      techTags: ['UPI & Razorpay', 'Inventory DB'],
      features: configServices[1]?.features || [
        'Instant UPI & Card Payment Gateway',
        'Real-Time Product Catalog & Inventory',
        'Automated Order & Invoice System'
      ]
    },
    {
      id: 'software-1',
      category: 'software',
      title: configServices[2]?.title || 'Custom Software & ERP',
      pillText: configServices[2]?.turnaround ? `Delivery: ${configServices[2].turnaround}` : 'Tailored Business Logic',
      desc: configServices[2]?.desc || 'Automated CRM, billing portals, inventory trackers, and internal operational systems.',
      icon: <Code2 size={18} />,
      image: webappImg,
      techTags: ['PostgreSQL DB', 'Workflow Automation', 'Cloud Node.js'],
      features: configServices[2]?.features || [
        'Bespoke Business Workflow Automation',
        'Secure Role-Based Admin & Staff Access',
        'Real-Time Invoicing & Inventory DB'
      ]
    },
    {
      id: 'web-2',
      category: 'web',
      title: 'Mobile Responsive UX',
      pillText: 'Fluid Viewports',
      desc: 'Flawless, 60fps responsive interfaces optimized for desktop, tablet, and mobile.',
      icon: <Smartphone size={18} />,
      image: responsiveImg,
      techTags: ['Fluid Layouts', 'Touch UX'],
      features: [
        'Adaptive Fluid Grid Architecture',
        'Progressive Web App (PWA) Support',
        'Cross-Browser iOS & Android Testing'
      ]
    },
    {
      id: 'apps-1',
      category: 'apps',
      title: 'Custom Web Apps',
      pillText: 'Full-Stack React & Node',
      desc: 'Bespoke admin panels, REST/GraphQL APIs, interactive dashboards & database systems.',
      icon: <Cpu size={18} />,
      image: webappImg,
      techTags: ['Node.js REST API', 'Cloud Database'],
      features: [
        'Multi-User Role Authentication',
        'Real-Time Analytics & Data Widgets',
        'Scalable Cloud Database Backend'
      ]
    },
    {
      id: 'seo-1',
      category: 'seo',
      title: 'SEO & Performance',
      pillText: 'Rank #1 Google',
      desc: 'Technical search optimization & speed architecture to rank your brand on Google.',
      icon: <Gauge size={18} />,
      image: seoImg,
      techTags: ['JSON-LD Schema', 'llms.txt AI Standard'],
      features: [
        'Google PageSpeed & Core Web Vitals 100',
        'Automated SEO Meta Tags & Schema Markup',
        'Local SEO Map & Regional Keyword Ranking'
      ]
    }
  ];

  const servicesData = defaultServicesData;

  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="pro-services-section">
      <div className="container">
        
        {/* Minimalist Section Header */}
        <div className="pro-services-header">
          <div className="pro-pill-badge">
            <Sparkles size={13} color="#f59e0b" />
            <span>OUR CORE SERVICES</span>
          </div>

          <h2 className="pro-section-title">
            Engineering Digital Excellence<br />
            <span className="pro-gradient-text">For Growing Businesses.</span>
          </h2>
          
          <p className="pro-section-desc">
            High-converting web platforms, e-commerce storefronts, and custom software engineered for authority and speed.
          </p>
        </div>

        {/* Segment Control Filter Bar */}
        <div className="pro-tabs-wrapper">
          <div className="pro-tabs-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`pro-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Card Grid with Generated Visual Cards */}
        <div className="pro-services-grid">
          {filteredServices.map((service) => (
            <div key={service.id || service.title} className="pro-service-card">
              
              {/* Generated Service Image Banner (Numbers Removed) */}
              <div className="pro-card-image-box">
                <img src={service.image} alt={service.title} className="pro-card-bg-img" loading="lazy" width="400" height="225" />
                <div className="pro-card-image-overlay"></div>
              </div>

              <div className="pro-card-body">
                {/* Title & Badge */}
                <div className="pro-card-title-row">
                  <div className="pro-icon-badge">{service.icon}</div>
                  <h3 className="pro-card-title">{service.title}</h3>
                </div>

                <span className="pro-card-tag">{service.pillText}</span>

                {/* Description */}
                <p className="pro-card-desc">{service.desc}</p>

                {/* Key Features Bullet List */}
                <ul className="pro-features-list">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={13} color="#10b981" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pro-tech-chips">
                  {service.techTags.map((tag, tIdx) => (
                    <span key={tIdx} className="pro-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <button className="pro-card-cta" onClick={onContactClick}>
                  <span>Inquire Now</span>
                  <ChevronRight size={15} className="pro-cta-arrow" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Consultation Banner */}
        <div className="pro-enterprise-banner">
          <div className="banner-left">
            <h3>Need a Custom Enterprise Solution?</h3>
            <p>We build tailored React/Node applications, API integrations, and database backends for your operations.</p>
          </div>
          <button className="btn btn-primary banner-btn" onClick={onContactClick}>
            Get Free Consultation <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
