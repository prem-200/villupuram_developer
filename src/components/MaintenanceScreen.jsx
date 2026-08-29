import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { Sparkles, Phone, WhatsApp, ArrowRight, ShieldCheck, Lock, Clock, Activity } from './Icons';
import centerLogoImg from '../assets/log1.webp';

export default function MaintenanceScreen({ onAdminAccess }) {
  const { config } = useConfig();
  const brandLogo = config?.brand?.logo || centerLogoImg;
  const brandName = config?.brand?.name || 'Villupuram Developer';
  const phone = config?.brand?.phone || '+91 63793 48861';
  const whatsappNum = config?.brand?.whatsapp || '916379348861';
  const phoneTel = phone.replace(/[^0-9+]/g, '');

  const headline = config?.maintenance?.headline || 'Scheduled System Upgrade in Progress';
  const message = config?.maintenance?.message || 'We are currently deploying ultra-fast server edge optimizations and platform updates. We will be back online shortly!';
  const estimatedReturn = config?.maintenance?.estimatedReturn || 'Back in under 1 hour';

  return (
    <div className="maintenance-screen-wrapper">
      
      {/* Background Animated Matrix Grid */}
      <div className="grid-bg-container">
        <div className="grid-bg"></div>
        <div className="grid-radial-glow"></div>
        <div className="grid-radial-glow-2"></div>
      </div>

      <div className="maintenance-card-container">
        <div className="maintenance-card">
          
          {/* Central Glowing Cyber Medallion Logo */}
          <div className="admin-circle-hero-wrapper">
            <div className="admin-logo-halo-ring"></div>
            <div className="admin-logo-halo-ring ring-outer"></div>
            <div className="admin-circle-logo-disc">
              <img 
                src={brandLogo} 
                alt={`${brandName} Emblem`} 
                className="admin-circle-logo-img" 
              />
              <div className="admin-logo-laser-sweep"></div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="maintenance-status-badge">
            <span className="maintenance-pulse-dot"></span>
            <span>SYSTEM UPGRADE IN PROGRESS</span>
          </div>

          <h1 className="maintenance-heading">
            {headline}
          </h1>

          <p className="maintenance-message">
            {message}
          </p>

          {/* Estimated Completion Timer Tag */}
          <div className="maintenance-meta-row">
            <div className="maintenance-meta-item">
              <Clock size={15} color="#ffaa40" />
              <span>{estimatedReturn}</span>
            </div>
            <div className="maintenance-meta-item">
              <Activity size={15} color="#10b981" />
              <span>Edge CDN Protected</span>
            </div>
          </div>

          {/* Direct Support & Inquiry Actions */}
          <div className="maintenance-cta-group">
            <a 
              href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent("Hi Villupuram Developer! I saw your site is in maintenance, I'd like to ask about a website project.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary maintenance-btn"
            >
              <WhatsApp size={16} />
              <span>Contact via WhatsApp</span>
            </a>

            <a 
              href={`tel:${phoneTel}`}
              className="btn btn-secondary maintenance-btn"
            >
              <Phone size={15} />
              <span>Call Technical Lead</span>
            </a>
          </div>

          {/* Footer Admin Lock Access */}
          <div className="maintenance-footer">
            <button 
              type="button" 
              className="maintenance-admin-link"
              onClick={onAdminAccess}
            >
              <Lock size={12} />
              <span>Administrator Portal Access</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
