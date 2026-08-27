import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Gauge, Search, Sparkles } from './Icons';
import project1Img from '../assets/project1.svg';
import project2Img from '../assets/project2.svg';
import project3Img from '../assets/project3.svg';

export default function Projects({ onContactClick }) {
  const [activeTab, setActiveTab] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef(null);

  const projectsData = [
    {
      id: 0,
      title: 'Local Business Website',
      category: 'Business Website',
      desc: 'An ultra-modern, high-performance portal designed for an upscale construction and interior architecture firm.',
      img: project1Img,
      metrics: [
        { label: 'Load Speed', value: '0.4s', icon: <Gauge size={14} /> },
        { label: 'Google Lighthouse', value: '99', icon: <Sparkles size={14} /> },
        { label: 'SEO Visibility', value: 'Perfect', icon: <Search size={14} /> }
      ]
    },
    {
      id: 1,
      title: 'Modern E-Commerce Store',
      category: 'E-Commerce',
      desc: 'A lightning-fast storefront with custom filtering and glassmorphic micro-interactions built for a local boutique brand.',
      img: project2Img,
      metrics: [
        { label: 'Load Speed', value: '0.6s', icon: <Gauge size={14} /> },
        { label: 'Google Lighthouse', value: '98', icon: <Sparkles size={14} /> },
        { label: 'SEO Visibility', value: 'Optimized', icon: <Search size={14} /> }
      ]
    },
    {
      id: 2,
      title: 'Professional Service Website',
      category: 'Business Website',
      desc: 'A sleek, professional, and SEO-optimized website structured for a local legal consulting and financial advisory firm.',
      img: project3Img,
      metrics: [
        { label: 'Load Speed', value: '0.3s', icon: <Gauge size={14} /> },
        { label: 'Google Lighthouse', value: '99', icon: <Sparkles size={14} /> },
        { label: 'SEO Visibility', value: 'Excellent', icon: <Search size={14} /> }
      ]
    }
  ];

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % projectsData.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay, projectsData.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setAutoplay(false); // Disable autoplay on manual click
  };

  const currentProject = projectsData[activeTab];

  return (
    <section id="projects" className="projects-section reveal reveal-scale-in">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">04 / SELECTED WORK</span>
          <h2 className="section-title">BUILT TO IMPRESS.</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Toggle through our premium mockups to preview the responsive layouts, lightning speeds, and customized visual details we deliver.
          </p>
        </div>

        {/* Carousel & Tab Layout Container */}
        <div className="projects-tab-layout">
          
          {/* Left Column: Vertical Tabs */}
          <div className="project-tab-list">
            {projectsData.map((project, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={project.id}
                  className={`project-tab-button ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="tab-num">0{index + 1}</span>
                  <div className="tab-content">
                    <span className="tab-category">{project.category}</span>
                    <span className="tab-title">{project.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Panel */}
          <div className="project-tab-display">
            {/* Visual Preview panel */}
            <div className="project-display-visual">
              <div className="mock-browser-window">
                <img 
                  src={currentProject.img} 
                  alt={currentProject.title} 
                  className="mock-browser-img" 
                  width="600"
                  height="380"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Info details panel */}
            <div className="project-display-info">
              <span className="project-cat">{currentProject.category}</span>
              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-desc">{currentProject.desc}</p>
              
              {/* Metrics Grid */}
              <div className="project-metrics-grid">
                {currentProject.metrics.map((metric, i) => (
                  <div key={i} className="metric-box">
                    <span className="metric-icon">{metric.icon}</span>
                    <div className="metric-texts">
                      <span className="metric-val">{metric.value}</span>
                      <span className="metric-lbl">{metric.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className="project-link btn btn-primary" 
                style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                }}
              >
                Inquire About Project <ArrowRight size={16} className="btn-icon" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
