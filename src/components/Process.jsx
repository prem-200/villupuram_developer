import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'We sit down with you to thoroughly understand your business model, target audience, core goals, and precise technical requirements.'
    },
    {
      num: '02',
      title: 'DESIGN',
      desc: 'We create a tailored visual direction, layout grids, and interactive user experiences designed specifically around your brand.'
    },
    {
      num: '03',
      title: 'DEVELOP',
      desc: 'We construct your site using clean React architectures and lightning-fast styles, ensuring high speed and clean SEO output.'
    },
    {
      num: '04',
      title: 'LAUNCH',
      desc: 'We conduct final cross-browser testing, loading-speed optimization, SEO configuration, and launch your high-performance presence.'
    }
  ];

  return (
    <section className="process-timeline-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">05 / OUR PROCESS</span>
          <h2 className="section-title">FROM IDEA TO LAUNCH.</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Our systematic approach ensures we deliver your project on schedule with absolute technical and visual quality.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={step.num} className={`process-step reveal ${index % 2 === 0 ? 'reveal-slide-left' : 'reveal-slide-right'}`}>
              <div className="process-node">{step.num}</div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
