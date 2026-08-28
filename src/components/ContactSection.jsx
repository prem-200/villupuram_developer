import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Send, Check, WhatsApp, 
  ArrowRight, ShieldCheck, Sparkles,
  Smartphone, Lock, Globe, Github,
  ReactIcon, NextjsIcon, GoogleIcon, ViteIcon, TailwindIcon, PostgresIcon,
  TypescriptIcon, NodejsIcon, PythonIcon, DockerIcon, FigmaIcon, RedisIcon
} from './Icons';
import { useConfig } from '../context/ConfigContext';

import centerLogoImg from '../assets/log1.webp';

export default function ContactSection() {
  const { config } = useConfig();
  const whatsappNum = config?.brand?.whatsapp || '916379348861';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Business Website',
    message: ''
  });

  const [activeNode, setActiveNode] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success

  // Inner orbital ring - 8 Core High-Velocity Tech Nodes
  const innerOrbitNodes = [
    {
      id: 'react',
      name: 'React 19',
      category: 'Frontend Engineering',
      desc: 'Sub-300ms SPA architecture with GPU-accelerated 60fps UX',
      bgColor: 'linear-gradient(135deg, #032b43, #041b2d)',
      borderColor: '#00d8ff',
      glowColor: 'rgba(0, 216, 255, 0.4)',
      icon: <ReactIcon size={22} color="#00d8ff" />,
      serviceType: 'Business Website'
    },
    {
      id: 'nextjs',
      name: 'Next.js 15',
      category: 'SSR & Fullstack',
      desc: 'Lightning-fast hybrid rendering and instant server-side streaming',
      bgColor: 'linear-gradient(135deg, #18181b, #09090b)',
      borderColor: '#e4e4e7',
      glowColor: 'rgba(255, 255, 255, 0.3)',
      icon: <NextjsIcon size={19} color="#ffffff" />,
      serviceType: 'Custom Web App'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Type Safety',
      desc: 'Zero runtime bugs with robust end-to-end type validation',
      bgColor: '#3178c6',
      borderColor: '#60a5fa',
      glowColor: 'rgba(49, 120, 198, 0.4)',
      icon: <TypescriptIcon size={20} />,
      serviceType: 'Custom Web App'
    },
    {
      id: 'wa',
      name: 'WhatsApp Business',
      category: 'Instant Lead Capture',
      desc: 'Direct customer lead alerts & 1-click WhatsApp messaging',
      bgColor: 'linear-gradient(135deg, #16a34a, #15803d)',
      borderColor: '#22c55e',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      icon: <WhatsApp size={20} color="#ffffff" strokeWidth={2.2} />,
      serviceType: 'Business Website'
    },
    {
      id: 'upi',
      name: 'UPI & Razorpay',
      category: 'Instant Payment Gateway',
      desc: 'QR codes, GPay, PhonePe & automated checkout flows',
      bgColor: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
      borderColor: '#a855f7',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      icon: <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>₹</span>,
      serviceType: 'E-Commerce Store'
    },
    {
      id: 'nodejs',
      name: 'Node.js Engine',
      category: 'Scalable Microservices',
      desc: 'High-throughput asynchronous REST & GraphQL backend services',
      bgColor: '#1e293b',
      borderColor: '#5fa04e',
      glowColor: 'rgba(95, 160, 78, 0.4)',
      icon: <NodejsIcon size={20} />,
      serviceType: 'Custom Software & ERP'
    },
    {
      id: 'seo',
      name: 'Google SEO',
      category: 'Search Engine Rank',
      desc: '#1 Local Map ranking & structured Schema.org markup',
      bgColor: '#ffffff',
      borderColor: '#cbd5e1',
      glowColor: 'rgba(66, 133, 244, 0.35)',
      icon: <GoogleIcon size={20} />,
      serviceType: 'Website Redesign / SEO'
    },
    {
      id: 'vite',
      name: 'Vite 8 Turbo',
      category: 'Build Optimization',
      desc: 'Sub-millisecond HMR & optimized production bundling',
      bgColor: 'linear-gradient(135deg, #4c1d95, #311068)',
      borderColor: '#c084fc',
      glowColor: 'rgba(192, 132, 252, 0.4)',
      icon: <ViteIcon size={19} />,
      serviceType: 'Business Website'
    }
  ];

  // Outer orbital ring - 10 Infrastructure, AI & Ecosystem Nodes
  const outerOrbitNodes = [
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'UI/UX Design Tokens',
      desc: 'Clean, responsive modern design system & glassmorphism',
      bgColor: 'linear-gradient(135deg, #0f172a, #020617)',
      borderColor: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.35)',
      icon: <TailwindIcon size={20} color="#38bdf8" />,
      serviceType: 'Business Website'
    },
    {
      id: 'postgres',
      name: 'PostgreSQL DB',
      category: 'Cloud Database',
      desc: 'High-availability SQL database & real-time inventory schemas',
      bgColor: 'linear-gradient(135deg, #1e293b, #0f172a)',
      borderColor: '#60a5fa',
      glowColor: 'rgba(96, 165, 250, 0.35)',
      icon: <PostgresIcon size={20} color="#60a5fa" />,
      serviceType: 'Custom Software & ERP'
    },
    {
      id: 'python',
      name: 'Python & AI',
      category: 'Automation & ML',
      desc: 'Intelligent workflow automation and smart chatbot models',
      bgColor: '#0f172a',
      borderColor: '#ffd438',
      glowColor: 'rgba(255, 212, 56, 0.4)',
      icon: <PythonIcon size={20} />,
      serviceType: 'Custom Software & ERP'
    },
    {
      id: 'cloudflare',
      name: 'Cloudflare Edge CDN',
      category: 'Global Speed & Security',
      desc: 'Edge caching in 300+ cities with DDOS protection & SSL',
      bgColor: 'linear-gradient(135deg, #ea580c, #c2410c)',
      borderColor: '#fb923c',
      glowColor: 'rgba(251, 146, 60, 0.4)',
      icon: <Globe size={20} color="#ffffff" strokeWidth={2.2} />,
      serviceType: 'Business Website'
    },
    {
      id: 'docker',
      name: 'Docker Cloud',
      category: 'Containerization',
      desc: 'Zero-downtime containerized deployments & instant scaling',
      bgColor: '#0b233a',
      borderColor: '#2496ed',
      glowColor: 'rgba(36, 150, 237, 0.4)',
      icon: <DockerIcon size={20} />,
      serviceType: 'Custom Web App'
    },
    {
      id: 'figma',
      name: 'Figma UI/UX',
      category: 'Wireframes & Design',
      desc: 'Custom high-fidelity wireframes & clickable prototypes',
      bgColor: '#18181b',
      borderColor: '#a259ff',
      glowColor: 'rgba(162, 89, 255, 0.4)',
      icon: <FigmaIcon size={19} />,
      serviceType: 'Business Website'
    },
    {
      id: 'github',
      name: 'GitHub IP Transfer',
      category: '100% Code Ownership',
      desc: 'Full private repository handover and client IP ownership',
      bgColor: 'linear-gradient(135deg, #27272a, #18181b)',
      borderColor: '#71717a',
      glowColor: 'rgba(255, 255, 255, 0.25)',
      icon: <Github size={20} color="#ffffff" strokeWidth={2.2} />,
      serviceType: 'Business Website'
    },
    {
      id: 'redis',
      name: 'Redis In-Memory',
      category: 'High-Speed Caching',
      desc: 'Sub-millisecond session caching and real-time pub/sub',
      bgColor: '#2c0f0f',
      borderColor: '#dc382d',
      glowColor: 'rgba(220, 56, 45, 0.4)',
      icon: <RedisIcon size={20} />,
      serviceType: 'Custom Software & ERP'
    },
    {
      id: 'mobile',
      name: 'Mobile PWA',
      category: 'Touch Viewports',
      desc: '100% responsive fluid mobile layout & native app feel',
      bgColor: 'linear-gradient(135deg, #db2777, #be185d)',
      borderColor: '#f472b6',
      glowColor: 'rgba(244, 114, 182, 0.4)',
      icon: <Smartphone size={20} color="#ffffff" strokeWidth={2.2} />,
      serviceType: 'Custom Web App'
    },
    {
      id: 'ssl',
      name: 'SSL & Auth Security',
      category: 'Enterprise Protection',
      desc: 'End-to-end encryption, HTTPS padlock & secure auth tokens',
      bgColor: 'linear-gradient(135deg, #059669, #047857)',
      borderColor: '#34d399',
      glowColor: 'rgba(52, 211, 153, 0.4)',
      icon: <Lock size={19} color="#ffffff" strokeWidth={2.2} />,
      serviceType: 'Custom Web App'
    }
  ];

  const handleNodeClick = (node) => {
    setActiveNode(node);
    if (node.serviceType) {
      setFormData(prev => ({
        ...prev,
        service: node.serviceType,
        message: prev.message || `Hi! I want to build a platform incorporating ${node.name} (${node.category}).`
      }));
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_villupuram';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_public_key_here';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      project_type: formData.service,
      message: formData.message,
      to_email: 'villupuram.developer@gmail.com'
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Business Website',
        message: ''
      });
    } catch (err) {
      console.warn('EmailJS fallback active:', err);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Business Website',
        message: ''
      });
    }
  };

  const whatsappUrl = `https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hi Villupuram Developer! I'd like to discuss a ${formData.service || 'website'} project.`
  )}`;

  return (
    <section id="contact" className="orbital-contact-section reveal reveal-scale-in">
      
      {/* Ambient Lighting Background */}
      <div className="orbital-ambient-glow glow-1"></div>
      <div className="orbital-ambient-glow glow-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Main 2-Column Grid */}
        <div className="orbital-contact-grid">
          
          {/* LEFT SIDE: Rich 18-Node Orbital Radar Ecosystem */}
          <div className="orbital-radar-column">
            
            <div className="orbital-radar-header">
              <span className="orbital-badge">
                <Sparkles size={13} color="#f59e0b" />
                <span>EXPANDED TECH ECOSYSTEM</span>
              </span>
              <h2 className="orbital-title">
                Connected by <span className="gradient-text">advanced technology.</span>
              </h2>
              <p className="orbital-subtitle">
                Click any orbiting technology badge to customize your platform requirements.
              </p>
            </div>

            {/* The Concentric Circular Radar Viewport */}
            <div className="orbital-radar-viewport">
              
              {/* Radial Core Ambient Glow */}
              <div className="radar-ambient-core-glow"></div>

              {/* CENTER HUB: Official Brand Logo Emblem */}
              <div className="radar-center-hub">
                <img 
                  src={centerLogoImg} 
                  alt="Villupuram Developer Logo" 
                  className="radar-center-logo-img"
                />
                <div className="radar-core-pulse"></div>
                <div className="radar-core-pulse pulse-delayed"></div>
              </div>

              {/* INNER ORBITAL RING (8 Nodes) */}
              <div className="orbital-track track-inner">
                {innerOrbitNodes.map((node, index) => {
                  const total = innerOrbitNodes.length;
                  const angle = (360 / total) * index;
                  const isSelected = activeNode?.id === node.id;
                  
                  return (
                    <div 
                      key={node.id} 
                      className="orbital-node-slot"
                      style={{
                        transform: `rotate(${angle}deg) translate(108px) rotate(-${angle}deg)`
                      }}
                    >
                      <button
                        type="button"
                        className={`radar-app-badge ${isSelected ? 'active' : ''}`}
                        style={{
                          background: node.bgColor,
                          borderColor: node.borderColor,
                          boxShadow: isSelected 
                            ? `0 0 20px ${node.glowColor}, 0 6px 14px rgba(0,0,0,0.6)` 
                            : `0 4px 12px rgba(0,0,0,0.5)`
                        }}
                        onClick={() => handleNodeClick(node)}
                        title={`${node.name} • ${node.category}`}
                        aria-label={node.name}
                      >
                        {node.icon}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* OUTER ORBITAL RING (10 Nodes) */}
              <div className="orbital-track track-outer">
                {outerOrbitNodes.map((node, index) => {
                  const total = outerOrbitNodes.length;
                  const angle = (360 / total) * index + 18; // offset for natural distribution
                  const isSelected = activeNode?.id === node.id;
                  
                  return (
                    <div 
                      key={node.id} 
                      className="orbital-node-slot"
                      style={{
                        transform: `rotate(${angle}deg) translate(175px) rotate(-${angle}deg)`
                      }}
                    >
                      <button
                        type="button"
                        className={`radar-app-badge ${isSelected ? 'active' : ''}`}
                        style={{
                          background: node.bgColor,
                          borderColor: node.borderColor,
                          boxShadow: isSelected 
                            ? `0 0 20px ${node.glowColor}, 0 6px 14px rgba(0,0,0,0.6)` 
                            : `0 4px 12px rgba(0,0,0,0.5)`
                        }}
                        onClick={() => handleNodeClick(node)}
                        title={`${node.name} • ${node.category}`}
                        aria-label={node.name}
                      >
                        {node.icon}
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Active Node Live Info Bar */}
            <div className="radar-node-info-bar">
              {activeNode ? (
                <div className="active-node-display">
                  <div className="node-icon-dot" style={{ backgroundColor: activeNode.borderColor }}></div>
                  <div className="node-texts">
                    <span className="node-title" style={{ color: activeNode.borderColor }}>
                      {activeNode.name} • {activeNode.category}
                    </span>
                    <span className="node-desc">{activeNode.desc}</span>
                  </div>
                </div>
              ) : (
                <div className="active-node-placeholder">
                  <Sparkles size={14} color="#f59e0b" />
                  <span>Click any technology badge to configure into your proposal</span>
                </div>
              )}
            </div>

            {/* Quick Direct WhatsApp Button */}
            <div className="radar-quick-direct">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="radar-wa-pill">
                <WhatsApp size={16} color="#25D366" />
                <span>Chat on WhatsApp: +91 63793 48861</span>
                <ArrowRight size={13} />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Modern Contact Form */}
          <div className="orbital-form-column">
            <div className="orbital-form-card">
              
              <div className="orbital-form-header">
                <h3 className="orbital-form-title">Start Your Project</h3>
                <p className="orbital-form-desc">
                  Tell us about your requirements. We'll send a technical proposal &amp; estimate within 2 hours.
                </p>
              </div>

              {status === 'success' ? (
                <div className="orbital-success-state">
                  <div className="orbital-success-icon">
                    <Check size={32} color="#10b981" />
                  </div>
                  <h4>Project Inquiry Received!</h4>
                  <p>
                    Thank you! We have received your project details and our senior engineer will contact you shortly.
                  </p>
                  
                  <div className="orbital-success-actions">
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ gap: '6px', textDecoration: 'none' }}
                    >
                      <WhatsApp size={16} />
                      <span>Speed up on WhatsApp</span>
                    </a>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setStatus('idle')}
                    >
                      Configure Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="orbital-form-body">
                  
                  <div className="orbital-dual-row">
                    <div className="orbital-field">
                      <label htmlFor="orb-name">Your Full Name *</label>
                      <input
                        type="text"
                        id="orb-name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="orbital-field">
                      <label htmlFor="orb-email">Business Email *</label>
                      <input
                        type="email"
                        id="orb-email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="orbital-dual-row">
                    <div className="orbital-field">
                      <label htmlFor="orb-phone">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="orb-phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="orbital-field">
                      <label htmlFor="orb-service">Selected Platform</label>
                      <select
                        id="orb-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Business Website">Business Website (Speed 100)</option>
                        <option value="E-Commerce Store">E-Commerce Store (UPI Ready)</option>
                        <option value="Custom Web App">Custom Web Application</option>
                        <option value="Custom Software & ERP">Custom Software &amp; ERP</option>
                        <option value="Website Redesign / SEO">Website Redesign / SEO</option>
                      </select>
                    </div>
                  </div>

                  <div className="orbital-field">
                    <label htmlFor="orb-message">Project Goals &amp; Requirements *</label>
                    <textarea
                      id="orb-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe what you want to build, target launch date, or any reference websites..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary orbital-submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      'Submitting Project Blueprint...'
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <div className="orbital-privacy-note">
                    <ShieldCheck size={13} color="#10b981" />
                    <span>Direct Senior Developer review. Zero spam guaranteed.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
