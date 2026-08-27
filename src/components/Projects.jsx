import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Globe, CheckCircle2, ExternalLink } from './Icons';

import bsrocksImg from '../assets/project_bsrocks.webp';
import versatileImg from '../assets/project_versatile.webp';
import synstarImg from '../assets/project_synstar.webp';

export default function Projects({ onContactClick }) {
  const [activeTab, setActiveTab] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef(null);

  const projectsData = [
    {
      id: 0,
      title: 'BS Rocks Creations',
      category: 'Event & Talent Organization',
      url: 'bsrockscreations.com',
      liveUrl: 'https://bsrockscreations.com/',
      desc: 'A high-impact event management & world record organization portal built for brand visibility, talent showcases, and national record events.',
      img: bsrocksImg,
      techStack: ['React 19 SPA Architecture', 'Talent Showcase Engine', 'Lighthouse 100/100'],
      metrics: [
        { label: 'Speed Score', value: '0.3s ⚡' },
        { label: 'Lighthouse', value: '100/100' },
        { label: 'Google SEO', value: 'Rank #1' }
      ]
    },
    {
      id: 1,
      title: 'Versatile Business School',
      category: 'Educational Institute Portal',
      url: 'versatilebusinessschool.com',
      liveUrl: 'https://versatilebusinessschool.com/',
      desc: 'An authoritative higher education & B-School platform featuring course catalogs, student placement statistics, and instant lead inquiry capture.',
      img: versatileImg,
      techStack: ['React 19 Clean Modular Code', 'MBA Course Catalog DB', 'Student Placement Stats'],
      metrics: [
        { label: 'Speed Score', value: '0.4s ⚡' },
        { label: 'Lighthouse', value: '99/100' },
        { label: 'Mobile UI', value: 'Fluid 60fps' }
      ]
    },
    {
      id: 2,
      title: 'Synstar Staffing Agency',
      category: 'Global HR & Staffing Platform',
      url: 'synstarstaffing.com',
      liveUrl: 'https://synstarstaffing.com/',
      desc: 'A full-stack recruitment & staffing agency portal featuring global candidate tracking, enterprise talent pipelines, and employer inquiries.',
      img: synstarImg,
      techStack: ['React 19 Full-Stack', 'Global Talent Pipelines', 'Node.js REST API'],
      metrics: [
        { label: 'API Response', value: '6ms' },
        { label: 'Lighthouse', value: '100/100' },
        { label: 'SSL HTTPS', value: 'Verified ✓' }
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
    setAutoplay(false);
  };

  const currentProject = projectsData[activeTab];

  return (
    <section id="projects" className="pro-projects-section reveal reveal-scale-in">
      <div className="container">
        
        {/* Section Header */}
        <div className="pro-projects-header">
          <div className="pro-pill-badge">
            <Sparkles size={13} color="#f59e0b" />
            <span>04 / SELECTED WORK</span>
          </div>

          <h2 className="pro-section-title">
            REAL CLIENT PLATFORMS.<br />
            <span className="pro-gradient-text">Engineered For Growth & Authority.</span>
          </h2>
          
          <p className="pro-section-desc">
            Explore live enterprise platforms delivered for our clients — featuring sub-300ms speed, high-conversion design systems, and Google ranking.
          </p>
        </div>

        {/* Interactive Real Projects Tab Switcher */}
        <div className="pro-project-tabs">
          {projectsData.map((project, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={project.id}
                className={`pro-p-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                <span className="p-tab-num">0{index + 1}</span>
                <div className="p-tab-info">
                  <span className="p-tab-cat">{project.category}</span>
                  <span className="p-tab-title">{project.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Display Showcase Window */}
        <div className="pro-project-display-card">
          
          {/* Left Column: Browser Mockup Visual */}
          <div className="pro-project-visual-col">
            <div className="pro-mockup-browser">
              
              {/* Browser Header Bar */}
              <div className="browser-bar">
                <div className="browser-dots">
                  <span className="b-dot red"></span>
                  <span className="b-dot yellow"></span>
                  <span className="b-dot green"></span>
                </div>
                <a 
                  href={currentProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="browser-url-box"
                >
                  <Globe size={11} color="#38bdf8" />
                  <span>https://{currentProject.url}</span>
                </a>
              </div>

              {/* Browser Image Container */}
              <div className="browser-img-wrapper">
                <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={currentProject.img} 
                    alt={currentProject.title} 
                    className="browser-showcase-img" 
                    width="700"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Project Info & Performance Telemetry */}
          <div className="pro-project-info-col">
            
            <div className="info-header-tag">
              <span className="project-category-chip">{currentProject.category}</span>
            </div>

            <h3 className="project-display-title">{currentProject.title}</h3>
            
            <p className="project-display-desc">{currentProject.desc}</p>

            {/* Performance Telemetry Grid */}
            <div className="pro-telemetry-grid">
              {currentProject.metrics.map((metric, i) => (
                <div key={i} className="telemetry-box">
                  <span className="telemetry-val">{metric.value}</span>
                  <span className="telemetry-lbl">{metric.label}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pro-stack-chips">
              {currentProject.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="stack-chip">
                  <CheckCircle2 size={12} color="#10b981" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pro-project-actions">
              <a 
                href={currentProject.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Visit Live Website</span>
                <ExternalLink size={14} />
              </a>

              <button 
                className="btn btn-primary" 
                onClick={onContactClick}
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
