import React, { useState } from 'react';
import { Plus, Minus } from './Icons';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most professional business websites take between 2 to 4 weeks from our initial discovery meeting to launch day. This timeline depends on the complexity of design adjustments, custom features, and the timely provision of copy or content.'
    },
    {
      question: 'Do you optimize websites for search engines (SEO)?',
      answer: 'Yes. Every website we compile includes fundamental SEO structuring. We configure semantic HTML, structure descriptive metadata, optimize image payloads for page speed, and ensure perfect mobile responsiveness to help you rank on search engines.'
    },
    {
      question: 'Can I update my website content later?',
      answer: 'Absolutely. We design our platforms with modular React components, making simple updates direct and efficient. If requested, we can also integrate a headless Content Management System (CMS) so you can update text, blogs, or products without writing code.'
    },
    {
      question: 'Will my website work perfectly on mobile screens?',
      answer: 'Yes, 100%. We employ a rigorous responsive design approach. Your site is tested across multiple physical device widths (smartphones, tablets, laptops, and ultra-wide screens) to guarantee a consistent, fast, and touch-optimized experience.'
    }
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="faq-section reveal reveal-fade-up">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">07 / FAQ</span>
          <h2 className="section-title">Common Questions.</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Got questions about taking your business online? Here are direct answers to what clients ask most.
          </p>
        </div>

        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{
                  borderBottom: '1px solid var(--border-color)',
                  padding: '1.5rem 0',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    padding: '0.5rem 0'
                  }}
                >
                  <span className={isOpen ? 'gradient-text' : ''}>{faq.question}</span>
                  {isOpen ? (
                    <Minus size={18} className="text-orange" style={{ color: 'var(--accent-blue)' }} />
                  ) : (
                    <Plus size={18} style={{ color: 'var(--text-secondary)' }} />
                  )}
                </button>
                
                <div 
                  className="faq-answer-container"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    paddingTop: isOpen ? '0.75rem' : '0'
                  }}
                >
                  <p 
                    style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.975rem', 
                      lineHeight: '1.6' 
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
