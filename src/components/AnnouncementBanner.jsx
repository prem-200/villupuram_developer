import React, { useState, useEffect } from 'react';
import { useConfig } from '../context/ConfigContext';
import { Sparkles, ArrowRight, X, Clock } from './Icons';

export default function AnnouncementBanner() {
  const { config } = useConfig();
  const [dismissed, setDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 17, minutes: 48, seconds: 32 });

  const banner = config?.announcementBanner;
  const isVisible = banner?.enabled && !dismissed;
  const style = banner?.style || 'countdown-deal';
  const colorTheme = banner?.colorTheme || 'amber';

  // Synchronize body class for dynamic navbar offset
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('has-top-banner');
      if (style === 'floating-capsule') {
        document.body.classList.add('banner-floating-capsule');
      } else {
        document.body.classList.remove('banner-floating-capsule');
      }
    } else {
      document.body.classList.remove('has-top-banner');
      document.body.classList.remove('banner-floating-capsule');
    }

    return () => {
      document.body.classList.remove('has-top-banner');
      document.body.classList.remove('banner-floating-capsule');
    };
  }, [isVisible, style]);

  // Live countdown timer ticking every second
  useEffect(() => {
    if (!isVisible || !banner?.showCountdown) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, banner?.showCountdown]);

  if (!isVisible) return null;

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div 
      className={`announcement-banner-wrapper banner-style-${style} banner-theme-${colorTheme}`} 
      role="alert"
    >
      {/* Background Animated Laser Stream */}
      <div className="banner-laser-stream"></div>

      <div className="announcement-banner-content">
        
        {/* Badge / Tag */}
        {banner.badge && (
          <span className="announcement-badge">
            <Sparkles size={12} className="banner-sparkle-icon" />
            <span>{banner.badge}</span>
          </span>
        )}

        {/* Live Urgency Countdown Timer */}
        {banner.showCountdown && (
          <div className="banner-countdown-pill" title="Special offer expiry countdown">
            <Clock size={12} className="countdown-clock-icon" />
            <span className="countdown-label">ENDS IN:</span>
            <span className="countdown-timer-digits">
              {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </span>
          </div>
        )}
        
        {/* Main Text */}
        <p className="announcement-text">{banner.text}</p>
        
        {/* Call to Action Link */}
        {banner.ctaText && (
          <a href={banner.ctaLink || '#contact'} className="announcement-link">
            <span>{banner.ctaText}</span>
            <ArrowRight size={12} className="banner-arrow-icon" />
          </a>
        )}
      </div>

      {/* Dismiss Button */}
      <button 
        type="button" 
        className="announcement-close-btn"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        title="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
