import React, { useState } from 'react';
import { Plus, Minus } from './Icons';
import { useConfig } from '../context/ConfigContext';

export default function FAQ() {
  const { config } = useConfig();
  const [activeIndex, setActiveIndex] = useState(null);

  const defaultFaqs = [
    {
      id: 'faq-1',
      question: 'How long does it take to build a website?',
      answer: 'Most professional business websites take 4 to 6 business days from initial discovery to launch day.'
    },
    {
      id: 'faq-2',
      question: 'Do you optimize websites for search engines (SEO)?',
      answer: 'Yes. Every website includes Schema JSON, meta descriptions, image compression, and Google Search Console indexing.'
    },
    {
      id: 'faq-3',
      question: 'Can I update my website content later?',
      answer: 'Yes! You can use our dedicated Admin Panel at /admin to update texts, phone numbers, logos, and projects anytime without coding.'
    },
    {
      id: 'faq-4',
      question: 'Will my website work perfectly on mobile screens?',
      answer: 'Yes, 100%. We test and optimize across all iPhone, Android, tablet, and desktop viewports.'
    }
  ];

  const faqs = (config?.faqs && config.faqs.length > 0) ? config.faqs : defaultFaqs;

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
