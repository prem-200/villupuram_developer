import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Phone, 
  MessageCircle,
  ExternalLink,
  Lock,
  Activity,
  Award,
  Clock
} from './Icons';
import AnnouncementBanner from './AnnouncementBanner';
import Footer from './Footer';
import logoImg from '../assets/header.png';
import { trackLiveAction } from '../utils/visitorTracker';

export default function PricingPage({ onNavigateHome, onContactClick }) {
  const { config } = useConfig();
  const whatsappNumber = config?.brand?.whatsapp?.replace(/[^0-9]/g, '') || '916379348861';

  // Calculator State for Custom Requirement Estimator
  const [calcPages, setCalcPages] = useState(5);
  const [hasEcommerce, setHasEcommerce] = useState(false);
  const [hasAdminPanel, setHasAdminPanel] = useState(true);
  const [hasUpiPayment, setHasUpiPayment] = useState(false);
  const [hasCustomDb, setHasCustomDb] = useState(false);

  // Dynamic Calculation
  const calculateEstimatedPrice = () => {
    let base = 5000;
    if (calcPages > 3) base += (calcPages - 3) * 600;
    if (hasEcommerce) base += 4500;
    if (hasUpiPayment) base += 1500;
    if (hasCustomDb) base += 8000;
    return base;
  };

  const estimatedPrice = calculateEstimatedPrice();

  const handleWhatsAppQuote = (packageName, price) => {
    trackLiveAction(`Selected ${packageName} (${price}) Tier on WhatsApp`, '/pricing');
    const text = encodeURIComponent(
      `Hi Villupuram Developer! I am on your Pricing Page and would like to proceed with the ${packageName} (${price}) plan.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleCustomEstimateWhatsApp = () => {
    trackLiveAction(`Generated Custom Estimate ₹${estimatedPrice.toLocaleString('en-IN')} on WhatsApp`, '/pricing');
    const specs = [
      `${calcPages} Pages`,
      hasEcommerce ? 'E-Commerce Storefront' : null,
      hasUpiPayment ? 'Instant UPI QR & Razorpay' : null,
      hasAdminPanel ? 'Admin Control Console' : null,
      hasCustomDb ? 'Custom PostgreSQL Database / ERP' : null
    ].filter(Boolean).join(', ');

    const text = encodeURIComponent(
      `Hi Villupuram Developer! I calculated a custom estimate of approx ₹${estimatedPrice.toLocaleString('en-IN')} with specs: [${specs}]. Can we discuss my project?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const defaultPricing = [
    {
      id: 'starter',
      name: 'Starter Web Presence',
      price: '₹5,000 – ₹7,999',
      billing: 'One-Time All-Inclusive',
      turnaround: '4 Days Delivery',
      badge: 'STARTER',
      isPopular: false,
      desc: 'Ideal for local businesses, clinics, lawyers, and consulting agencies that need immediate Google credibility and fast mobile leads.',
      features: [
        'Single-Page Fast React 19 SPA',
        'Free .com / .in Domain for 1 Year',
        'Cloudflare Edge SSL & High-Speed CDN',
        'Direct WhatsApp & Call Lead Triggers',
        'Google Maps & Local SEO Setup',
        '100% Mobile & Tablet Responsive',
        'Zero Monthly Maintenance Fees'
      ]
    },
    {
      id: 'business',
      name: 'Full Business & E-Commerce',
      price: '₹10,000 – ₹14,999',
      billing: 'One-Time All-Inclusive',
      turnaround: '6 Days Delivery',
      badge: 'MOST POPULAR',
      isPopular: true,
      desc: 'Engineered for growing retail brands, service companies, and e-commerce stores wanting instant online payments and WhatsApp order alerts.',
      features: [
        'Multi-Page High-Conversion Store',
        'Instant UPI QR & Razorpay Payments',
        'Full Administrative Control Panel',
        'Automated WhatsApp Order Alerts',
        'Google Search Console & Meta Schema',
        'Lighthouse 100/100 Grade A+ Speed',
        'Bilingual Tamil + English CMS',
        '1-Year Free Priority Cloud Support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Custom Software & ERP',
      price: '₹29,999+',
      billing: 'Based on Requirement',
      turnaround: '10-14 Days',
      badge: 'CUSTOM / ERP',
      isPopular: false,
      desc: 'Tailored web applications, internal staff dashboards, automated billing engines, and client CRM platforms built around your operations.',
      features: [
        'Bespoke Dashboard & Role-Based Access',
        'PostgreSQL & Real-Time Cloud DB',
        'Automated PDF Invoicing & WhatsApp Bot',
        'Custom APIs & 3rd-Party Integrations',
        'Dedicated VIP Technical Support 24/7',
        'Scalable Cloudflare Serverless Backend',
        'Complete Source Code Ownership'
      ]
    }
  ];

  const packages = (config?.pricing && config.pricing.length > 0) ? config.pricing : defaultPricing;

  return (
    <div className="pricing-standalone-page">
      <AnnouncementBanner />

      {/* Grid Radial Background */}
      <div className="grid-bg-container">
        <div className="grid-bg"></div>
        <div className="grid-radial-glow"></div>
        <div className="grid-radial-glow-2"></div>
      </div>

      {/* Page Header / Top Navigation Bar */}
      <header className="pricing-page-header">
        <div className="container pricing-nav-container">
          <div className="pricing-nav-left">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="pricing-brand-link">
              <img src={logoImg} alt="Villupuram Developer Logo" className="navbar-logo" width="170" height="68" />
            </a>
          </div>

          <div className="pricing-nav-actions">
            <button 
              type="button" 
              className="btn btn-secondary pricing-back-home-btn"
              onClick={onNavigateHome}
            >
              <span>← Back to Home</span>
            </button>

            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary pricing-nav-wa-btn"
            >
              <MessageCircle size={15} />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="pricing-page-main">
        <div className="container">
          
          {/* Breadcrumb */}
          <div className="pricing-breadcrumb">
            <span onClick={onNavigateHome} className="breadcrumb-link">HOME</span>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">TRANSPARENT PRICING &amp; INVESTMENT TIERS</span>
          </div>

          {/* Hero Header */}
          <div className="pricing-page-hero">
            <div className="pricing-pill-badge">
              <Sparkles size={13} color="#ffaa40" />
              <span>ALL-INCLUSIVE FIXED RATES • ZERO HIDDEN COSTS</span>
            </div>
            <h1 className="pricing-page-title">
              CLEAR, HONEST PRICING.<br />
              <span className="text-gradient">ENGINEERED FOR BUSINESS GROWTH.</span>
            </h1>
            <p className="pricing-page-desc">
              Every website we build is hand-crafted with high-speed React 19 architecture, free domain, Cloudflare edge security, and 100/100 Lighthouse performance. You get 100% source code ownership.
            </p>
          </div>

          {/* 3 Main Pricing Cards Grid */}
          <div className="pricing-grid" style={{ marginBottom: '4.5rem' }}>
            {packages.map((pkg, idx) => {
              const isPopular = pkg.isPopular || pkg.badge?.toLowerCase().includes('popular');

              return (
                <div 
                  key={pkg.id || idx} 
                  className={`pricing-card-v2 ${isPopular ? 'popular-card-v2' : ''} tier-card-${idx + 1}`}
                >
                  {/* Top Glowing Laser Accent Beam */}
                  <div className="pricing-card-laser-beam"></div>

                  {isPopular && (
                    <div className="pricing-popular-badge-v2">
                      <Sparkles size={13} className="sparkle-bounce" />
                      <span>MOST POPULAR CHOICE</span>
                    </div>
                  )}

                  <div className="pricing-card-top-row">
                    <div className="pricing-badge-pill">
                      <span>{pkg.badge || `TIER 0${idx + 1}`}</span>
                    </div>
                    <div className="pricing-turnaround-pill-v2">
                      <span className="pill-pulse-dot"></span>
                      <span>{pkg.turnaround || 'Fast Delivery'}</span>
                    </div>
                  </div>

                  <h2 className="pricing-tier-title">{pkg.name}</h2>
                  
                  {pkg.desc && (
                    <p className="pricing-tier-tagline">{pkg.desc}</p>
                  )}

                  <div className="pricing-price-display">
                    <span className="pricing-price-main">{pkg.price}</span>
                    <span className="pricing-billing-tag">{pkg.billing || 'One-Time Project'}</span>
                  </div>

                  {/* Features List */}
                  <div className="pricing-features-wrap">
                    <span className="features-section-title">FULL PACKAGE DELIVERABLES:</span>
                    <ul className="pricing-feature-items">
                      {(pkg.features || []).map((feat, fIdx) => (
                        <li key={fIdx}>
                          <div className="feature-check-disc">
                            <CheckCircle2 size={14} color="#10b981" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pricing-card-bottom">
                    <button 
                      type="button" 
                      className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'} pricing-cta-btn`}
                      onClick={() => handleWhatsAppQuote(pkg.name, pkg.price)}
                    >
                      <span>{isPopular ? 'Choose Business Pro' : idx === 2 ? 'Request Custom Quote' : 'Choose Starter'}</span>
                      <ArrowRight size={15} />
                    </button>
                    <div className="pricing-trust-guarantee">
                      <ShieldCheck size={13} color="#10b981" />
                      <span>Free 1-Yr Hosting &amp; Cloudflare SSL Included</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* INTERACTIVE REQUIREMENT ESTIMATE CALCULATOR */}
          <div className="pricing-calculator-card">
            <div className="calculator-header">
              <div className="calc-badge">
                <Activity size={13} color="#10b981" />
                <span>INTERACTIVE ESTIMATOR</span>
              </div>
              <h3>Estimate Your Custom Project Cost</h3>
              <p>Select your exact requirements below to see an instant real-time budget calculation.</p>
            </div>

            <div className="calculator-grid">
              
              {/* Controls */}
              <div className="calculator-controls">
                
                <div className="calc-control-group">
                  <div className="calc-label-row">
                    <label>Number of Website Pages</label>
                    <span className="calc-num-badge">{calcPages} Pages</span>
                  </div>
                  <input 
                    type="range" 
                    min={1} 
                    max={20} 
                    value={calcPages}
                    onChange={(e) => setCalcPages(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="calc-range-marks">
                    <span>1 Page (Landing)</span>
                    <span>5-10 Pages (Corporate)</span>
                    <span>20 Pages (Portal)</span>
                  </div>
                </div>

                <div className="calc-checkbox-grid">
                  <label className={`calc-checkbox-pill ${hasEcommerce ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasEcommerce} 
                      onChange={e => setHasEcommerce(e.target.checked)} 
                    />
                    <span>🛍️ E-Commerce Storefront (+₹4,500)</span>
                  </label>

                  <label className={`calc-checkbox-pill ${hasUpiPayment ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasUpiPayment} 
                      onChange={e => setHasUpiPayment(e.target.checked)} 
                    />
                    <span>⚡ Instant UPI QR / Razorpay (+₹1,500)</span>
                  </label>

                  <label className={`calc-checkbox-pill ${hasAdminPanel ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasAdminPanel} 
                      onChange={e => setHasAdminPanel(e.target.checked)} 
                    />
                    <span>🔐 Full Admin Control Console (Included)</span>
                  </label>

                  <label className={`calc-checkbox-pill ${hasCustomDb ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={hasCustomDb} 
                      onChange={e => setHasCustomDb(e.target.checked)} 
                    />
                    <span>🗄️ PostgreSQL Database / CRM Portal (+₹8,000)</span>
                  </label>
                </div>

              </div>

              {/* Estimate Summary Box */}
              <div className="calculator-summary-box">
                <span className="summary-label">ESTIMATED ALL-INCLUSIVE BUDGET</span>
                <div className="summary-price-wrap">
                  <span className="summary-currency">₹</span>
                  <span className="summary-amount">{estimatedPrice.toLocaleString('en-IN')}</span>
                  <span className="summary-term">One-Time</span>
                </div>

                <div className="summary-inclusions-list">
                  <div className="summary-inc-item">
                    <CheckCircle2 size={14} color="#10b981" />
                    <span>Domain (.com/.in) &amp; Cloudflare SSL</span>
                  </div>
                  <div className="summary-inc-item">
                    <CheckCircle2 size={14} color="#10b981" />
                    <span>Lighthouse 100/100 Grade A+ Speed</span>
                  </div>
                  <div className="summary-inc-item">
                    <CheckCircle2 size={14} color="#10b981" />
                    <span>100% Mobile &amp; Tablet Touch-Optimized</span>
                  </div>
                  <div className="summary-inc-item">
                    <CheckCircle2 size={14} color="#10b981" />
                    <span>1-Year Free Security &amp; Hosting</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary summary-wa-btn"
                  onClick={handleCustomEstimateWhatsApp}
                >
                  <MessageCircle size={16} />
                  <span>Lock In This Estimate on WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

          {/* DETAILED COMPARISON TABLE */}
          <div className="pricing-comparison-wrap">
            <h3 className="comparison-title">Full Package Comparison Matrix</h3>
            
            <div className="table-responsive-wrapper">
              <table className="pricing-comparison-table">
                <thead>
                  <tr>
                    <th>Feature &amp; Capability</th>
                    <th>Starter</th>
                    <th className="th-highlight">Full Business (Pro)</th>
                    <th>Custom Software / ERP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Investment</td>
                    <td>₹5,000 – ₹7,999</td>
                    <td className="td-highlight">₹10,000 – ₹14,999</td>
                    <td>₹29,999+ (Tailored)</td>
                  </tr>
                  <tr>
                    <td>Delivery Turnaround</td>
                    <td>4 Days</td>
                    <td className="td-highlight">6 Days</td>
                    <td>10-14 Days</td>
                  </tr>
                  <tr>
                    <td>Architecture &amp; Framework</td>
                    <td>React 19 &amp; Vite 8 SPA</td>
                    <td className="td-highlight">React 19 Multi-Page Platform</td>
                    <td>Full-Stack Next.js / Node.js</td>
                  </tr>
                  <tr>
                    <td>Performance Score</td>
                    <td>Lighthouse 100/100</td>
                    <td className="td-highlight">Lighthouse 100/100</td>
                    <td>Sub-200ms Edge Latency</td>
                  </tr>
                  <tr>
                    <td>Domain &amp; SSL</td>
                    <td>1-Yr Free (.com / .in)</td>
                    <td className="td-highlight">1-Yr Free (.com / .in)</td>
                    <td>Enterprise Cloudflare SSL</td>
                  </tr>
                  <tr>
                    <td>Online Payments</td>
                    <td>WhatsApp Direct Order</td>
                    <td className="td-highlight">Instant UPI QR &amp; Razorpay</td>
                    <td>Multi-Gateway &amp; Automated Invoicing</td>
                  </tr>
                  <tr>
                    <td>Admin Control Panel</td>
                    <td>Standard CMS</td>
                    <td className="td-highlight">Advanced Admin Console</td>
                    <td>Role-Based Staff Dashboard</td>
                  </tr>
                  <tr>
                    <td>Bilingual Support</td>
                    <td>English</td>
                    <td className="td-highlight">Tamil + English Bilingual</td>
                    <td>Multi-Language CMS</td>
                  </tr>
                  <tr>
                    <td>Database &amp; Storage</td>
                    <td>Cloud Edge Cache</td>
                    <td className="td-highlight">Real-Time Cloud State</td>
                    <td>PostgreSQL / Redis Dedicated</td>
                  </tr>
                  <tr>
                    <td>Priority Support</td>
                    <td>6 Months Free</td>
                    <td className="td-highlight">1 Year Free Priority 24/7</td>
                    <td>Dedicated Engineering Lead</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4 SOLID GUARANTEES */}
          <div className="pricing-guarantees-grid">
            <div className="guarantee-card">
              <div className="guarantee-icon-disc">
                <Zap size={20} color="#ff6b00" />
              </div>
              <h4>100/100 Speed Guarantee</h4>
              <p>Every website is engineered for sub-300ms load times and zero bounce rates.</p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-disc">
                <Clock size={20} color="#10b981" />
              </div>
              <h4>On-Time Delivery</h4>
              <p>Strict milestone schedules. Your project goes live on the exact committed day.</p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-disc">
                <Lock size={20} color="#38bdf8" />
              </div>
              <h4>100% Code Ownership</h4>
              <p>You own all source code, repositories, domain, and digital assets with zero vendor lock-in.</p>
            </div>

            <div className="guarantee-card">
              <div className="guarantee-icon-disc">
                <ShieldCheck size={20} color="#8b5cf6" />
              </div>
              <h4>1-Year Cloud Support</h4>
              <p>Free security updates, server monitoring, and technical maintenance included.</p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer onContactClick={onContactClick} />
    </div>
  );
}
