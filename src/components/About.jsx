import React, { useState, useEffect, useRef } from 'react';

export default function About() {
  const [projects, setProjects] = useState(0);
  const [responsive, setResponsive] = useState(0);
  const [presence, setPresence] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    // Animate Projects (0 to 10)
    let pCount = 0;
    const pTimer = setInterval(() => {
      pCount += 1;
      setProjects(pCount);
      if (pCount >= 10) clearInterval(pTimer);
    }, 80);

    // Animate Responsive % (0 to 100)
    let rCount = 0;
    const rTimer = setInterval(() => {
      rCount += 4;
      setResponsive(rCount);
      if (rCount >= 100) {
        setResponsive(100);
        clearInterval(rTimer);
      }
    }, 30);

    // Animate Presence Hours (0 to 24)
    let hCount = 0;
    const hTimer = setInterval(() => {
      hCount += 1;
      setPresence(hCount);
      if (hCount >= 24) clearInterval(hTimer);
    }, 45);
  };

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container about-grid">
        <div className="about-stats reveal reveal-slide-left">
          <div className="stat-item">
            <span className="stat-num">{projects}+</span>
            <span className="stat-label">Web Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">{responsive}%</span>
            <span className="stat-label">Responsive</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">{presence}/7</span>
            <span className="stat-label">Digital Presence</span>
          </div>
        </div>

        <div className="about-content reveal reveal-slide-right">
          <span className="section-label">06 / ABOUT</span>
          <h2>
            SMALL TEAM.<br />
            BIG DIGITAL IDEAS.
          </h2>
          <p>
            Villupuram Developer is a specialized web engineering and digital design brand. We focus on crafting fast, professional, and bespoke web platforms for startups and established local businesses.
          </p>
          <p>
            We eliminate the bloated layers of traditional agencies, working directly with business owners to deliver high-performing websites that look stunning, rank on Google, and convert clicks into clients.
          </p>
        </div>
      </div>
    </section>
  );
}
