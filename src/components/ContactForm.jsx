import React, { useState, useEffect } from 'react';
import { X, Send, Check } from './Icons';
const logoImg = '/logo.webp';

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Business Website',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Clean up
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    
    // Simulate API Submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Business Website',
        message: ''
      });
      // Close modal after delay
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Brand Logo Watermark Background */}
        <div className="modal-watermark-bg">
          <img src={logoImg} alt="Brand Logo Watermark" />
        </div>

        <h3 className="modal-title">Start Your Project</h3>
        <p className="modal-desc">
          Tell us about your project requirements and we will get back to you with a direct consultation.
        </p>

        {status === 'success' ? (
          <div className="form-success-msg" style={{ position: 'relative', zIndex: 1 }}>
            <Check size={28} style={{ margin: '0 auto 0.5rem auto' }} />
            <p>Message sent successfully!</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '0.25rem' }}>We will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 63793 48861"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="projectType">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                className="form-control"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="Business Website">Business Website</option>
                <option value="E-Commerce">E-Commerce Store</option>
                <option value="Custom Web App">Custom Development</option>
                <option value="Maintenance">Website Redesign / SEO</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, timeline, and goals..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', gap: '0.5rem' }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                'Sending Message...'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
