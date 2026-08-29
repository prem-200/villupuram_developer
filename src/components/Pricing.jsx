import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, Award } from './Icons';

export default function Pricing({ onContactClick }) {
  const { config } = useConfig();
  const whatsappNumber = config?.brand?.whatsapp?.replace(/[^0-9]/g, '') || '916379348861';

  const defaultPricing = [
    {
      id: 'starter',
      name: 'Starter Web Presence',
      price: '₹5,000 – ₹7,999',
      billing: 'One-Time All-Inclusive',
      turnaround: '4 Days Delivery',
      badge: 'STARTER',
      isPopular: false,
      tagline: 'Instant credibility & lead generation for local businesses.',
      features: [
        'Single-Page Fast React 19 SPA',
        'Free .com / .in Domain for 1 Year',
        'Cloudflare Edge SSL & High-Speed CDN',
        'Direct WhatsApp & Call Lead Triggers',
        'Google Maps & Local SEO Setup',
        '100% Mobile & Tablet Responsive'
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
      tagline: 'High-conversion storefront with UPI checkout & Admin CMS.',
      features: [
        'Multi-Page High-Conversion Store',
        'Instant UPI QR & Razorpay Payments',
        'Full Administrative Control Panel',
        'Automated WhatsApp Order Alerts',
        'Google Search Console & Meta Schema',
        'Lighthouse 100/100 Grade A+ Speed',
        'Bilingual Tamil + English CMS'
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
      tagline: 'Custom cloud databases, staff portals & bespoke APIs.',
      features: [
        'Bespoke Dashboard & Role-Based Access',
        'PostgreSQL & Real-Time Cloud DB',
        'Automated PDF Invoicing & WhatsApp Bot',
        'Custom APIs & 3rd-Party Integrations',
        'Dedicated VIP Technical Support 24/7',
        'Scalable Cloudflare Serverless Backend'
      ]
    }
  ];

  const packages = (config?.pricing && config.pricing.length > 0) ? config.pricing : defaultPricing;

  const handleSelectPackage = (pkg) => {
    const text = encodeURIComponent(`Hi Villupuram Developer! I am interested in the ${pkg.name} (${pkg.price}) package. Can we discuss my requirements?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="pricing-section reveal reveal-fade-up">
      <div className="container">
        
        {/* Section Header */}
        <div className="pricing-header-wrap">
          <span className="section-label">04 / TRANSPARENT PRICING</span>
          <h2 className="section-title">
            INVESTMENT TIERS.<br />
            <span className="text-gradient">ENGINEERED TO SCALE.</span>
          </h2>
          <p className="section-desc">
            Direct, transparent rates with zero hidden server or recurring maintenance fees. All tiers include 100/100 Lighthouse speed, SSL, and full code ownership.
          </p>
        </div>

        {/* Improved Pricing Cards Grid */}
        <div className="pricing-grid">
          {packages.map((pkg, idx) => {
            const isPopular = pkg.isPopular || pkg.badge?.toLowerCase().includes('popular');

            return (
              <div 
                key={pkg.id || idx} 
                className={`pricing-card-v2 ${isPopular ? 'popular-card-v2' : ''} tier-card-${idx + 1}`}
              >
                {/* Top Glowing Laser Accent Beam */}
                <div className="pricing-card-laser-beam"></div>

                {/* Popular Ribbon / Badge */}
                {isPopular && (
                  <div className="pricing-popular-badge-v2">
                    <Sparkles size={13} className="sparkle-bounce" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="pricing-card-top-row">
                  <div className="pricing-badge-pill">
                    <span>{pkg.badge || `TIER 0${idx + 1}`}</span>
                  </div>
                  <div className="pricing-turnaround-pill-v2">
                    <span className="pill-pulse-dot"></span>
                    <span>{pkg.turnaround || 'Fast Delivery'}</span>
                  </div>
                </div>

                <h3 className="pricing-tier-title">{pkg.name}</h3>
                {pkg.tagline && (
                  <p className="pricing-tier-tagline">{pkg.tagline}</p>
                )}

                {/* Price Display Block */}
                <div className="pricing-price-display">
                  <span className="pricing-price-main">{pkg.price}</span>
                  <span className="pricing-billing-tag">{pkg.billing || 'One-Time Project'}</span>
                </div>

                {/* Features Checklist */}
                <div className="pricing-features-wrap">
                  <span className="features-section-title">INCLUDED DELIVERABLES:</span>
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

                {/* Card Footer Actions */}
                <div className="pricing-card-bottom">
                  <button 
                    type="button" 
                    className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'} pricing-cta-btn`}
                    onClick={() => handleSelectPackage(pkg)}
                  >
                    <span>{isPopular ? 'Choose Business Pro' : idx === 2 ? 'Request Custom Quote' : 'Choose Starter'}</span>
                    <ArrowRight size={15} />
                  </button>
                  <div className="pricing-trust-guarantee">
                    <ShieldCheck size={13} color="#10b981" />
                    <span>Free 1-Yr Domain, SSL &amp; Cloudflare CDN</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Requirements Banner */}
        <div className="pricing-custom-banner-v2">
          <div className="custom-banner-left">
            <div className="custom-banner-badge">
              <Award size={13} color="#ffaa40" />
              <span>CUSTOM ENTERPRISE SPECIFICATIONS</span>
            </div>
            <h4>Need a multi-vendor marketplace, real-time CRM, or custom booking system?</h4>
            <p>We build tailored architectures engineered around your exact operations, database schemas, and workflows.</p>
          </div>
          <button 
            type="button" 
            className="btn btn-primary custom-consult-btn"
            onClick={onContactClick}
          >
            <span>Consult Technical Lead</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}
