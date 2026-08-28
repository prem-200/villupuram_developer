import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareCode, X, RefreshCw, Send } from './Icons';
import { useConfig } from '../context/ConfigContext';
const logoImg = '/logo.webp';

const FAQ_QA = [
  {
    id: 1,
    q: "What services do you offer?",
    keywords: ["service", "offer", "do you do", "skills", "develop"],
    a: "We specialize in Custom Business Websites, E-Commerce Stores, Custom Web Applications, and SEO Optimization."
  },
  {
    id: 2,
    q: "What is your typical project timeline?",
    keywords: ["time", "timeline", "long", "duration", "day", "week", "month"],
    a: "Most standard websites take 2 to 4 weeks. Custom web apps and complex platforms take 4 to 8 weeks depending on requirements."
  },
  {
    id: 3,
    q: "Do you provide website maintenance?",
    keywords: ["maintain", "maintenance", "update", "support", "care", "backup"],
    a: "Yes! We offer monthly maintenance plans covering security updates, hosting management, content updates, and regular backups."
  },
  {
    id: 4,
    q: "Will my website be mobile-friendly?",
    keywords: ["mobile", "phone", "responsive", "tablet", "screen", "friendly"],
    a: "Absolutely. Every website we build is fully responsive, looking and functioning perfectly on all mobile phones, tablets, and desktops."
  },
  {
    id: 5,
    q: "Do you handle domain and hosting setup?",
    keywords: ["domain", "host", "hosting", "server", "cloud", "setup", "deploy"],
    a: "Yes, we guide you through purchasing your domain and host, or we can configure and deploy everything to secure cloud servers for you."
  },
  {
    id: 6,
    q: "Can you optimize my existing site for SEO?",
    keywords: ["seo", "google", "rank", "speed", "search", "optimize", "optimization"],
    a: "Yes! We conduct speed audits, structure semantic markup, optimize images, and align metadata keywords to rank your site higher on Google."
  },
  {
    id: 7,
    q: "Where is your team based?",
    keywords: ["where", "location", "team", "villupuram", "place", "office", "india"],
    a: "We are proud developers based locally in Villupuram, Tamil Nadu, serving businesses worldwide."
  },
  {
    id: 8,
    q: "How much does a custom website cost?",
    keywords: ["price", "cost", "how much", "rate", "fee", "budget", "pricing"],
    a: "Pricing varies based on features, page count, and complexity. Contact us with your ideas to get a precise, customized quote!"
  },
  {
    id: 9,
    q: "Which technologies do you use?",
    keywords: ["tech", "react", "next", "language", "code", "node", "vite", "stack"],
    a: "We build using modern tech stacks including React, Node.js, Next.js, Vite, and custom CSS, ensuring ultra-fast load times."
  }
];

export default function ChatWidget() {
  const { config } = useConfig();
  const phone = config?.brand?.phone || '+91 63793 48861';
  const whatsapp = config?.brand?.whatsapp || '916379348861';
  const agentName = config?.chatWidget?.agentName || 'Senior Developer';
  const agentRole = config?.chatWidget?.agentRole || 'Lead Technical Architect';
  const welcomeMsg = config?.chatWidget?.welcomeMessage || "Hi there! 👋 I am your Senior Dev Assistant. Ask me anything about our web engineering capabilities, pricing, timelines, or tech stacks!";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: welcomeMsg,
      showWhatsApp: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const chatEndRef = useRef(null);

  const whatsappUrl = `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config?.chatWidget?.whatsappTemplate || 'Hi Villupuram Developer! I want to discuss a website project.')}`;

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const findMatchingAnswer = (query) => {
    const lower = query.toLowerCase();
    for (const item of FAQ_QA) {
      for (const kw of item.keywords) {
        if (lower.includes(kw)) {
          return {
            text: item.a,
            showWhatsApp: false
          };
        }
      }
    }
    return {
      text: `Thank you for reaching out! For detailed project pricing and custom requirements, feel free to connect with our developers directly on WhatsApp or phone at ${phone}.`,
      showWhatsApp: true
    };
  };

  const handleSendCustomMessage = (userText) => {
    if (!userText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: userText
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = findMatchingAnswer(userText);
      setIsTyping(false);
      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        showWhatsApp: response.showWhatsApp
      }]);
    }, 850);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    handleSendCustomMessage(inputValue);
  };

  const handleQuestionClick = (qa) => {
    handleSendCustomMessage(qa.q);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "Hi there! 👋 I am your Villupuram Developer Assistant. How can we help you build your digital presence today? Select a quick question below, or type your own question in the input box:"
      }
    ]);
    setIsTyping(false);
  };

  return (
    <div className="chat-widget-wrapper" style={{ position: 'fixed', zIndex: 99999, pointerEvents: 'auto' }}>
      
      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="chat-window animate-scale-in">
          
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <img src={logoImg} alt="VDP" className="chat-logo" />
              <div className="chat-status-details">
                <span className="chat-name">VDP Assistant</span>
                <span className="chat-status">
                  <span className="chat-status-dot"></span> Online
                </span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button onClick={handleReset} className="chat-btn-reset" title="Restart conversation">
                <RefreshCw size={14} />
              </button>
              <button onClick={() => setIsOpen(false)} className="chat-btn-close">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="chat-messages-container">
            {messages.map((msg, idx) => (
              <div key={msg.id || idx} className={`chat-message ${msg.sender === 'user' ? 'msg-user' : 'msg-bot'}`}>
                <div className="chat-message-bubble">
                  <p>{msg.text}</p>
                  
                  {/* WhatsApp redirect CTA button */}
                  {msg.showWhatsApp && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <a
                        href="https://wa.me/916379348861"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chat-whatsapp-link-btn"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          background: '#25D366',
                          color: '#ffffff',
                          padding: '0.5rem 0.85rem',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.8rem',
                          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                        }}
                      >
                        <span>Chat on WhatsApp (+91 63793 48861)</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message msg-bot">
                <div className="chat-message-bubble typing-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick FAQ Question Pills */}
          <div className="chat-quick-questions">
            <span className="chat-quick-title">Suggested Questions:</span>
            <div className="chat-questions-list">
              {FAQ_QA.map((qa) => (
                <button
                  key={qa.id}
                  className="chat-question-pill"
                  onClick={() => handleQuestionClick(qa)}
                >
                  {qa.q}
                </button>
              ))}
            </div>
          </div>

          {/* User Custom Typing Input Form */}
          <form onSubmit={handleCustomSubmit} className="chat-input-form">
            <input
              type="text"
              placeholder="Type your question here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chat-input-field"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              style={{
                background: 'transparent',
                border: 'none',
                color: inputValue.trim() && !isTyping ? 'var(--accent-blue)' : 'var(--text-muted)',
                cursor: inputValue.trim() && !isTyping ? 'pointer' : 'not-allowed',
                marginLeft: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.4rem'
              }}
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          setUnread(false);
        }} 
        className={`chat-trigger-bubble ${isOpen ? 'active' : ''}`}
        aria-label="Toggle chat assistant"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          pointerEvents: 'auto',
          zIndex: 99999
        }}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageSquareCode size={24} />
            {unread && <span className="chat-unread-dot"></span>}
          </>
        )}
      </button>

    </div>
  );
}
