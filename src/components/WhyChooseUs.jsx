import React from 'react';

export default function WhyChooseUs() {
  const features = [
    {
      num: '01',
      title: 'Modern Design',
      desc: 'Clean, intentional interfaces that establish immediate credibility and make your business look professional.'
    },
    {
      num: '02',
      title: 'Mobile First',
      desc: 'A seamless, touch-optimized user experience that loads lightning-fast and functions perfectly on every device screen.'
    },
    {
      num: '03',
      title: 'Fast Performance',
      desc: 'Optimized page speeds, clean code execution, and high-performance server structures to reduce bounce rates.'
    },
    {
      num: '04',
      title: 'Scalable Development',
      desc: 'Built using flexible, modular architectures, setting a strong technical foundation for your future business expansion.'
    }
  ];

  return (
    <section className="why-section">
      <div className="container">
        <span className="section-label">03 / WHY US</span>
        <h2 className="section-title">
          BUILT DIFFERENT.<br />
          BUILT FOR BUSINESS.
        </h2>
        <p className="section-desc">
          We do not use generic page builders or heavy templates. Every line of code is hand-crafted to give your business a performance and marketing advantage.
        </p>

        <div className="why-grid">
          {features.map((feat, index) => (
            <div key={feat.num} className={`why-card reveal ${index % 2 === 0 ? 'reveal-slide-left' : 'reveal-slide-right'}`}>
              <span className="why-num">{feat.num}</span>
              <div className="why-content">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
