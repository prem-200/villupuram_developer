import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { Star, Quote, ShieldCheck, CheckCircle2 } from './Icons';

export default function Testimonials() {
  const { config } = useConfig();

  const defaultTestimonials = [
    {
      id: 'rev-1',
      clientName: 'Rajesh Kumar',
      role: 'Founder, RJ Ventures',
      rating: 5,
      projectType: 'Corporate Web Portal',
      quote: 'Prem delivered our full corporate portal in just 4 days with a 100/100 Lighthouse score. Our client inquiries tripled in the first month. Best web engineering team in Tamil Nadu!'
    },
    {
      id: 'rev-2',
      clientName: 'Suresh Anand',
      role: 'Director, Syn Star Staffing',
      rating: 5,
      projectType: 'Full-Stack Recruitment ATS',
      quote: 'The speed, responsiveness, and cyber aesthetics of our platform completely blew our clients away. Everything from UPI integration to mobile UX was seamless.'
    },
    {
      id: 'rev-3',
      clientName: 'K. Meenakshi',
      role: 'Dean, Versatile Educational Institute',
      rating: 5,
      projectType: 'Academic Admission Portal',
      quote: 'Extremely dedicated and transparent work. The admin panel lets our staff update courses and announcements effortlessly without any technical knowledge.'
    }
  ];

  const testimonials = (config?.testimonials && config.testimonials.length > 0) 
    ? config.testimonials 
    : defaultTestimonials;

  return (
    <section id="reviews" className="testimonials-section reveal reveal-fade-up">
      <div className="container">
        
        {/* Section Header */}
        <div className="testimonials-header-wrap">
          <div className="testimonials-header-left">
            <span className="section-label">06 / CLIENT REVIEWS</span>
            <h2 className="section-title">
              PROVEN RESULTS.<br />
              <span className="text-gradient">CLIENT SATISFACTION.</span>
            </h2>
            <p className="section-desc">
              Real feedback from business owners, directors, and founders across Tamil Nadu who scaled their digital presence with our high-speed React platforms.
            </p>
          </div>

          {/* Google Verified Trust Card */}
          <div className="google-trust-badge-card">
            <div className="google-trust-score-row">
              <span className="google-rating-num">5.0</span>
              <div className="google-stars-wrap">
                <div className="stars-flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} color="#ffaa40" fill="#ffaa40" />
                  ))}
                </div>
                <span className="google-reviews-sub">100% Verified Client Feedback</span>
              </div>
            </div>
            <div className="google-trust-perks">
              <span className="trust-perk-pill">
                <CheckCircle2 size={13} color="#10b981" />
                <span>4-Day Delivery</span>
              </span>
              <span className="trust-perk-pill">
                <ShieldCheck size={13} color="#38bdf8" />
                <span>1-Yr Cloud Support</span>
              </span>
            </div>
          </div>
        </div>

        {/* Improved Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div 
              key={item.id || index} 
              className="testimonial-card-v2"
            >
              {/* Top Accent Line */}
              <div className="testimonial-glow-line"></div>

              {/* Card Header: Stars & Quote */}
              <div className="testimonial-card-top">
                <div className="testimonial-stars-badge">
                  <div className="stars-flex">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} size={15} color="#ffaa40" fill="#ffaa40" />
                    ))}
                  </div>
                  <span className="testimonial-verified-tag">
                    <CheckCircle2 size={11} color="#10b981" />
                    <span>VERIFIED CLIENT</span>
                  </span>
                </div>
                <div className="testimonial-quote-icon-wrap">
                  <Quote size={20} color="#ff6b00" />
                </div>
              </div>

              {/* Review Quote Body */}
              <p className="testimonial-quote-text">
                "{item.quote}"
              </p>

              {/* Card Footer: Client Info & Project Tag */}
              <div className="testimonial-footer-card">
                <div className="testimonial-author-block">
                  <div className="testimonial-author-avatar">
                    <span>{item.clientName?.charAt(0) || 'C'}</span>
                  </div>
                  <div className="testimonial-author-meta">
                    <h4 className="testimonial-client-name">{item.clientName}</h4>
                    <p className="testimonial-client-role">{item.role}</p>
                  </div>
                </div>

                {item.projectType && (
                  <div className="testimonial-project-row">
                    <span className="testimonial-project-pill">
                      <span className="pill-pulse-dot"></span>
                      <span>{item.projectType}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
