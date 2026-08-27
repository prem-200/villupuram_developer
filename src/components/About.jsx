import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Zap, ShieldCheck, Cpu } from './Icons';

export default function About() {
  const [activePod, setActivePod] = useState(0);

  const pods = [
    {
      id: 0,
      badge: 'DIRECT PARTNERSHIP',
      title: 'Zero Agency Bloat. 100% Direct Developer Line.',
      desc: 'We eliminate account managers and endless pitch decks. You work directly with senior engineers who build your website from sitemap to go-live.',
      icon: <Cpu size={22} color="#f59e0b" />,
      highlight: 'Direct Developer Access',
      status: '✓ Active Engineer Line',
      accentColor: '#f59e0b',
      metrics: ['No Middlemen', 'Daily Video Demos', 'Fixed Timelines']
    },
    {
      id: 1,
      badge: 'SPEED BENCHMARK',
      title: 'Sub-300ms Performance & 100/100 Lighthouse.',
      desc: 'We engineer custom React 19 SPA architecture with GPU-accelerated CSS animations and instant Cloudflare Edge asset preloading.',
      icon: <Zap size={22} color="#10b981" />,
      highlight: '0.2s Page Load Speed',
      status: '⚡ 100/100 Core Web Vitals',
      accentColor: '#10b981',
      metrics: ['0.2s Load Speed', 'Zero Layout Shift', '60fps Mobile UX']
    },
    {
      id: 2,
      badge: 'CLIENT GUARANTEE',
      title: '100% Code Ownership & Private GitHub Transfer.',
      desc: 'You own every line of code, design asset, and database schema. Complete GitHub repository transfer and IP ownership granted upon completion.',
      icon: <ShieldCheck size={22} color="#38bdf8" />,
      highlight: 'Full IP Ownership',
      status: '🔒 100% Client Owned',
      accentColor: '#38bdf8',
      metrics: ['GitHub Repo Access', 'No Vendor Lock-In', '365 Days Support']
    }
  ];

  return (
    <section id="about" className="nxt-about-section reveal reveal-scale-in">
      <div className="container">
        
        {/* Next-Gen Section Header */}
        <div className="nxt-about-header">
          <div className="nxt-badge-pulse">
            <Sparkles size={13} color="#f59e0b" />
            <span>06 / ABOUT OUR STUDIO</span>
          </div>

          <h2 className="nxt-section-title">
            ENGINEERING DIGITAL AUTHORITY.<br />
            <span className="pro-gradient-text">Small Studio. Advanced Technology.</span>
          </h2>
          
          <p className="nxt-section-desc">
            We are a high-performance web engineering studio in Tamil Nadu. We partner directly with ambitious business owners to craft fast, high-converting digital platforms.
          </p>
        </div>

        {/* Futuristic Interactive Command Center Pod Grid */}
        <div className="nxt-studio-command-grid">
          
          {/* Left Side Pod Switcher List */}
          <div className="nxt-pod-selector-column">
            {pods.map((pod, idx) => {
              const isActive = activePod === idx;
              return (
                <div
                  key={pod.id}
                  className={`nxt-pod-button ${isActive ? 'active' : ''}`}
                  onClick={() => setActivePod(idx)}
                >
                  <div className="pod-btn-icon" style={{ borderColor: isActive ? pod.accentColor : 'rgba(255,255,255,0.1)' }}>
                    {pod.icon}
                  </div>
                  <div className="pod-btn-content">
                    <span className="pod-btn-tag" style={{ color: isActive ? pod.accentColor : '#94a3b8' }}>
                      {pod.badge}
                    </span>
                    <h3 className="pod-btn-title">{pod.highlight}</h3>
                  </div>
                  <span className="pod-active-arrow">→</span>
                </div>
              );
            })}
          </div>

          {/* Right Side Glowing Holographic Pod Showcase Display */}
          <div className="nxt-pod-display-column">
            <div className="nxt-display-card">
              
              {/* Top Status Bar */}
              <div className="nxt-card-status-bar">
                <span className="nxt-status-tag">{pods[activePod].badge}</span>
                <span className="nxt-live-pill" style={{ borderColor: pods[activePod].accentColor, color: pods[activePod].accentColor }}>
                  {pods[activePod].status}
                </span>
              </div>

              {/* Main Content */}
              <h3 className="nxt-display-title">{pods[activePod].title}</h3>
              <p className="nxt-display-desc">{pods[activePod].desc}</p>

              {/* Live Metric Pills */}
              <div className="nxt-metrics-row">
                {pods[activePod].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="nxt-m-chip">
                    <CheckCircle2 size={13} color={pods[activePod].accentColor} />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Studio Performance Bar */}
        <div className="nxt-studio-bar">
          <div className="bar-item">
            <span className="b-val">50+</span>
            <span className="b-lbl">Web Projects</span>
          </div>
          <div className="bar-divider"></div>
          <div className="bar-item">
            <span className="b-val">100%</span>
            <span className="b-lbl">Responsive UI</span>
          </div>
          <div className="bar-divider"></div>
          <div className="bar-item">
            <span className="b-val">99.9%</span>
            <span className="b-lbl">Edge Uptime</span>
          </div>
          <div className="bar-divider"></div>
          <div className="bar-item">
            <span className="b-val">Villupuram • Chennai</span>
            <span className="b-lbl">Regional Command</span>
          </div>
        </div>

      </div>
    </section>
  );
}
