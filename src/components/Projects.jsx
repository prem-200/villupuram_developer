import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Globe, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from './Icons';
import { useConfig } from '../context/ConfigContext';

import rjImg from '../assets/rj (1).png';
import versatileImg from '../assets/project_versatile.webp';
import synstarImg from '../assets/synstar.png';

export default function Projects({ onContactClick }) {
  const { config } = useConfig();
  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const defaultImages = [rjImg, versatileImg, synstarImg];
  const rawProjects = config?.projects && config.projects.length > 0 ? config.projects : [
    {
      title: 'RJ Ventures',
      category: 'Business & Investment Ventures',
      liveUrl: 'https://rjventures.in/',
      tags: ['React 19 SPA', 'Fast CDN Edge', 'Lighthouse 100']
    },
    {
      title: 'Versatile Business School',
      category: 'Educational Institute Portal',
      liveUrl: 'https://versatilebusinessschool.com/',
      tags: ['React 19 Modular', 'Course DB', 'Schema SEO']
    },
    {
      title: 'Synstar Staffing Agency',
      category: 'Global HR & Staffing Platform',
      liveUrl: 'https://synstarstaffing.com/',
      tags: ['Full-Stack React', 'Node.js API', 'SSL Verified']
    }
  ];

  const projectsData = rawProjects.map((p, idx) => ({
    id: idx,
    title: p.title,
    category: p.category,
    url: p.liveUrl ? p.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'villupuramdeveloper.com',
    liveUrl: p.liveUrl || 'https://villupuramdeveloper.com',
    desc: p.desc || `Modern web platform built for ${p.title}, featuring high performance, modern responsive UI, and verified SEO indexing.`,
    img: p.img || defaultImages[idx % defaultImages.length],
    highlights: p.highlights || [
      `Engineered for high conversion and verified user engagement`,
      'Sub-300ms Speed with Clean React 19 Architecture'
    ],
    techStack: Array.isArray(p.tags) ? p.tags : ['React 19 SPA', 'Fast CDN Edge', 'Lighthouse 100']
  }));

  const resetAutoCarousel = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNextSlide();
    }, 5500);
  };

  const switchSlide = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(newIndex);
      setIsFading(false);
    }, 180);
  };

  const handleNextSlide = () => {
    setActiveTab((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrevSlide = () => {
    setActiveTab((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    resetAutoCarousel();
  };

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    switchSlide(index);
    resetAutoCarousel();
  };

  useEffect(() => {
    resetAutoCarousel();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [projectsData.length]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      // Swiped Left -> Next
      switchSlide((activeTab + 1) % projectsData.length);
      resetAutoCarousel();
    } else if (distance < -40) {
      // Swiped Right -> Prev
      switchSlide((activeTab - 1 + projectsData.length) % projectsData.length);
      resetAutoCarousel();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const safeIndex = (activeTab >= 0 && activeTab < projectsData.length) ? activeTab : 0;
  const currentProject = projectsData[safeIndex] || {
    title: 'Client Web Platform',
    category: 'Full-Stack Solution',
    url: 'villupuramdeveloper.com',
    liveUrl: 'https://villupuramdeveloper.com',
    desc: 'High performance modern digital platform built for business growth.',
    img: rjImg,
    highlights: ['Custom React 19 Architecture', 'Sub-300ms Speed & Cloud CDN'],
    techStack: ['React 19', 'Fast CDN', 'Lighthouse 100']
  };

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

        {/* Interactive Real Projects Tab Switcher (Desktop / Tablet) */}
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

        {/* Main Display Showcase Window (Touch-Swipeable on Mobile) */}
        <div 
          className={`pro-project-display-card ${isFading ? 'card-transitioning' : ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
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

          {/* Right Column: Project Info & Detailed Deliverables */}
          <div className="pro-project-info-col">
            
            <div className="info-header-tag">
              <span className="project-category-chip">{currentProject.category}</span>
            </div>

            <h3 className="project-display-title">{currentProject.title}</h3>
            
            <p className="project-display-desc">{currentProject.desc}</p>

            {/* Core Capabilities & Highlights List */}
            <div className="pro-project-features-box">
              <span className="pro-features-heading">CORE CAPABILITIES & HIGHLIGHTS:</span>
              <ul className="pro-project-feat-list">
                {currentProject.highlights.map((item, hIdx) => (
                  <li key={hIdx}>
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pro-stack-chips">
              {currentProject.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="stack-chip">
                  <CheckCircle2 size={11} color="#f59e0b" />
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

        {/* Mobile Auto Carousel Navigation & Pagination Bar */}
        <div className="project-mobile-carousel-bar">
          <button 
            className="carousel-arrow-btn" 
            onClick={handlePrevSlide}
            aria-label="Previous Project"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Interactive Slide Dots Indicator */}
          <div className="carousel-dots-group">
            {projectsData.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${activeTab === idx ? 'active' : ''}`}
                onClick={() => handleTabClick(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <div className="carousel-counter-badge">
            <span>0{activeTab + 1} / 0{projectsData.length}</span>
          </div>

          <button 
            className="carousel-arrow-btn" 
            onClick={() => { switchSlide((activeTab + 1) % projectsData.length); resetAutoCarousel(); }}
            aria-label="Next Project"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
