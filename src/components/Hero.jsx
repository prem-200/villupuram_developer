import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Globe, ShoppingBag, BarChart3, Layout, Layers } from './Icons';
import { useConfig } from '../context/ConfigContext';

export default function Hero({ onContactClick }) {
  const { config } = useConfig();
  const slidesData = config?.hero?.slides || [];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isSkeleton, setIsSkeleton] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    setIsSkeleton(true);
    const skeletonTimer = setTimeout(() => {
      setIsSkeleton(false);
    }, 1000);

    return () => clearTimeout(skeletonTimer);
  }, [activeSlide]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesData.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slidesData.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    resetAutoPlay();
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slidesData.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slidesData.length);
      }, 6500);
    }
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
    resetAutoPlay();
  };

  const scrollToProjects = () => {
    const target = document.querySelector('#projects');
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  /* Render Slide-Specific Laptop Skeleton UI (Shown for first 1s) */
  const renderLaptopSkeleton = (type) => {
    if (type === 'mobile') {
      return (
        <div className="skeleton-ui-container">
          <div className="skeleton-nav-row">
            <div className="skeleton-box" style={{ width: '80px', height: '10px' }}></div>
            <div className="skeleton-box" style={{ width: '50px', height: '10px', borderRadius: '10px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '6px' }}>
            <div className="skeleton-card" style={{ height: '140px', padding: '6px' }}>
              <div className="skeleton-box" style={{ height: '25px', marginBottom: '6px' }}></div>
              <div className="skeleton-box" style={{ height: '8px', marginBottom: '4px' }}></div>
              <div className="skeleton-box" style={{ height: '8px', width: '60%' }}></div>
            </div>
            <div className="skeleton-card" style={{ height: '140px', padding: '6px', border: '1px solid rgba(255,107,0,0.4)' }}>
              <div className="skeleton-box" style={{ height: '25px', marginBottom: '6px', background: '#ff6b00' }}></div>
              <div className="skeleton-box" style={{ height: '8px', marginBottom: '4px' }}></div>
              <div className="skeleton-box" style={{ height: '8px', width: '70%' }}></div>
            </div>
            <div className="skeleton-card" style={{ height: '140px', padding: '6px' }}>
              <div className="skeleton-box" style={{ height: '25px', marginBottom: '6px' }}></div>
              <div className="skeleton-box" style={{ height: '8px', marginBottom: '4px' }}></div>
              <div className="skeleton-box" style={{ height: '8px', width: '50%' }}></div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'ecommerce') {
      return (
        <div className="skeleton-ui-container">
          <div className="skeleton-nav-row">
            <div className="skeleton-box skeleton-logo" style={{ width: '45px' }}></div>
            <div className="skeleton-box" style={{ width: '90px', height: '10px', borderRadius: '10px' }}></div>
            <div className="skeleton-box" style={{ width: '16px', height: '12px', borderRadius: '3px' }}></div>
          </div>
          <div className="skeleton-box" style={{ width: '100%', height: '38px', borderRadius: '6px', background: 'linear-gradient(90deg, rgba(255,107,0,0.25), rgba(255,168,0,0.4), rgba(255,107,0,0.25))' }}></div>
          <div className="skeleton-cards-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-box sk-img" style={{ height: '32px' }}></div>
                <div className="skeleton-box sk-line-1"></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="skeleton-box" style={{ width: '18px', height: '6px' }}></div>
                  <div className="skeleton-box" style={{ width: '22px', height: '10px', borderRadius: '2px', background: '#ff6b00' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (type === 'custom') {
      return (
        <div className="skeleton-ui-container">
          <div className="skeleton-nav-row">
            <div className="skeleton-box" style={{ width: '60px', height: '10px' }}></div>
            <div className="skeleton-box" style={{ width: '30px', height: '10px', borderRadius: '50%' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            <div className="skeleton-card" style={{ padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '30px', height: '5px' }}></div>
              <div className="skeleton-box" style={{ width: '40px', height: '12px', background: '#ff6b00' }}></div>
            </div>
            <div className="skeleton-card" style={{ padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '30px', height: '5px' }}></div>
              <div className="skeleton-box" style={{ width: '40px', height: '12px', background: '#38bdf8' }}></div>
            </div>
            <div className="skeleton-card" style={{ padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '30px', height: '5px' }}></div>
              <div className="skeleton-box" style={{ width: '40px', height: '12px', background: '#22c55e' }}></div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6px', marginTop: '4px' }}>
            <div className="skeleton-card" style={{ height: '65px', display: 'flex', alignItems: 'flex-end', gap: '4px', padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '15%', height: '40%' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '75%', background: '#ff6b00' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '50%' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '90%', background: '#ffa800' }}></div>
              <div className="skeleton-box" style={{ width: '15%', height: '60%' }}></div>
            </div>
            <div className="skeleton-card" style={{ height: '65px', gap: '4px', padding: '6px' }}>
              <div className="skeleton-box" style={{ width: '100%', height: '8px' }}></div>
              <div className="skeleton-box" style={{ width: '100%', height: '8px' }}></div>
              <div className="skeleton-box" style={{ width: '100%', height: '8px' }}></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="skeleton-ui-container">
        <div className="skeleton-nav-row">
          <div className="skeleton-box skeleton-logo"></div>
          <div className="skeleton-nav-links">
            <div className="skeleton-box skeleton-link"></div>
            <div className="skeleton-box skeleton-link"></div>
            <div className="skeleton-box skeleton-link"></div>
          </div>
          <div className="skeleton-box skeleton-btn-sm"></div>
        </div>
        <div className="skeleton-hero-block">
          <div className="skeleton-left">
            <div className="skeleton-box skeleton-tag"></div>
            <div className="skeleton-box skeleton-h1"></div>
            <div className="skeleton-box skeleton-h2"></div>
            <div className="skeleton-box skeleton-p"></div>
            <div className="skeleton-btn-group">
              <div className="skeleton-box skeleton-btn-lg"></div>
              <div className="skeleton-box skeleton-btn-md"></div>
            </div>
          </div>
          <div className="skeleton-right">
            <div className="skeleton-box skeleton-visual-card">
              <div className="skeleton-circle-glow"></div>
            </div>
          </div>
        </div>
        <div className="skeleton-cards-grid">
          <div className="skeleton-card">
            <div className="skeleton-box sk-img"></div>
            <div className="skeleton-box sk-line-1"></div>
            <div className="skeleton-box sk-line-2"></div>
          </div>
          <div className="skeleton-card">
            <div className="skeleton-box sk-img"></div>
            <div className="skeleton-box sk-line-1"></div>
            <div className="skeleton-box sk-line-2"></div>
          </div>
          <div className="skeleton-card">
            <div className="skeleton-box sk-img"></div>
            <div className="skeleton-box sk-line-1"></div>
            <div className="skeleton-box sk-line-2"></div>
          </div>
        </div>
      </div>
    );
  };

  /* Render Slide-Specific Laptop Proper UI (Shown after 1s) */
  const renderLaptopProperUI = (type) => {
    if (type === 'mobile') {
      return (
        <div className="proper-ui-container proper-mobile-showcase-ui">
          {/* Header */}
          <div className="proper-nav-row">
            <div className="proper-brand-logo">
              <span className="brand-dot" style={{ background: '#22c55e' }}></span>
              <span className="logo-text">Fluid Viewports • 60fps</span>
            </div>
            <div className="proper-search-pill" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', borderColor: 'rgba(34,197,94,0.3)' }}>
              <span>⚡ Touch & PWA Ready</span>
            </div>
          </div>

          {/* 3 Devices Viewport Simulation */}
          <div className="mobile-viewports-grid">
            <div className="viewport-col-card">
              <div className="vp-device-header">
                <span>📱 Mobile Viewport</span>
                <small>375px</small>
              </div>
              <div className="vp-mini-screen">
                <div className="vp-pill-tag">60fps Fluid</div>
                <div className="vp-bar-accent"></div>
                <div className="vp-mini-boxes">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="viewport-col-card highlight-card">
              <div className="vp-device-header">
                <span>📲 Touch App PWA</span>
                <small>430px</small>
              </div>
              <div className="vp-mini-screen">
                <div className="vp-pill-tag" style={{ background: '#ff6b00', color: '#fff' }}>Touch Gestures</div>
                <div className="vp-bar-accent" style={{ background: 'linear-gradient(90deg, #ff6b00, #ffa800)' }}></div>
                <div className="vp-mini-boxes">
                  <div style={{ background: 'rgba(255,107,0,0.25)' }}></div>
                  <div style={{ background: 'rgba(255,107,0,0.25)' }}></div>
                </div>
              </div>
            </div>

            <div className="viewport-col-card">
              <div className="vp-device-header">
                <span>💻 Tablet Mini</span>
                <small>768px</small>
              </div>
              <div className="vp-mini-screen">
                <div className="vp-pill-tag">Sub-300ms</div>
                <div className="vp-bar-accent"></div>
                <div className="vp-mini-boxes">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'ecommerce') {
      return (
        <div className="proper-ui-container proper-ecom-ui">
          {/* E-Com Header */}
          <div className="proper-nav-row">
            <div className="proper-brand-logo">
              <span className="brand-dot" style={{ background: '#ff6b00' }}></span>
              <span className="logo-text" style={{ color: '#ffffff' }}>AURA STORE</span>
            </div>
            <div className="proper-search-pill">
              <span>🔍 Search 10k+ items...</span>
            </div>
            <div className="proper-cart-badge">
              <span>🛒 Cart (3)</span>
            </div>
          </div>

          {/* Promo Sale Banner */}
          <div className="proper-promo-banner">
            <span className="promo-badge">⚡ FLASH SALE</span>
            <span className="promo-title">40% OFF — INSTANT UPI & RAZORPAY CHECKOUT</span>
          </div>

          {/* 4 Product Cards Grid */}
          <div className="proper-products-grid">
            <div className="proper-product-card">
              <div className="prod-img-box">⌚</div>
              <div className="prod-name">Smart Watch Pro</div>
              <div className="prod-bottom">
                <span className="prod-price">₹2,499</span>
                <span className="prod-btn">Buy</span>
              </div>
            </div>
            <div className="proper-product-card">
              <div className="prod-img-box">🎧</div>
              <div className="prod-name">Air Pods ANC</div>
              <div className="prod-bottom">
                <span className="prod-price">₹3,299</span>
                <span className="prod-btn">Buy</span>
              </div>
            </div>
            <div className="proper-product-card">
              <div className="prod-img-box">🕶️</div>
              <div className="prod-name">VR Vision X</div>
              <div className="prod-bottom">
                <span className="prod-price">₹4,999</span>
                <span className="prod-btn">Buy</span>
              </div>
            </div>
            <div className="proper-product-card">
              <div className="prod-img-box">⚡</div>
              <div className="prod-name">Fit Tracker S</div>
              <div className="prod-bottom">
                <span className="prod-price">₹1,499</span>
                <span className="prod-btn">Buy</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'custom') {
      return (
        <div className="proper-ui-container proper-custom-ui">
          {/* Admin Header */}
          <div className="proper-nav-row">
            <div className="proper-brand-logo">
              <span className="brand-dot" style={{ background: '#38bdf8' }}></span>
              <span className="logo-text">CloudPanel v2.4</span>
            </div>
            <div className="proper-system-status">
              <span className="status-dot"></span>
              <span>Online • 99.99%</span>
            </div>
            <div className="proper-user-avatar">
              <span>ADMIN</span>
            </div>
          </div>

          {/* KPI Stat Cards */}
          <div className="proper-kpi-grid">
            <div className="proper-kpi-card">
              <div className="kpi-label">TOTAL REVENUE</div>
              <div className="kpi-val" style={{ color: '#ff6b00' }}>₹4.82L</div>
              <div className="kpi-trend">▲ +34.8%</div>
            </div>
            <div className="proper-kpi-card">
              <div className="kpi-label">ACTIVE USERS</div>
              <div className="kpi-val" style={{ color: '#38bdf8' }}>14,920</div>
              <div className="kpi-trend">▲ +18.2%</div>
            </div>
            <div className="proper-kpi-card">
              <div className="kpi-label">API LATENCY</div>
              <div className="kpi-val" style={{ color: '#22c55e' }}>18ms</div>
              <div className="kpi-trend">● Zero Drop</div>
            </div>
          </div>

          {/* Chart Graph & Table Section */}
          <div className="proper-analytics-row">
            <div className="proper-chart-card">
              <div className="chart-title">Real-Time Traffic</div>
              <div className="proper-bars-visual">
                <div className="chart-bar"><span className="bar-fill" style={{ height: '45%' }}></span></div>
                <div className="chart-bar"><span className="bar-fill" style={{ height: '80%', background: '#ff6b00' }}></span></div>
                <div className="chart-bar"><span className="bar-fill" style={{ height: '55%' }}></span></div>
                <div className="chart-bar"><span className="bar-fill" style={{ height: '95%', background: '#ffa800' }}></span></div>
                <div className="chart-bar"><span className="bar-fill" style={{ height: '70%' }}></span></div>
                <div className="chart-bar"><span className="bar-fill" style={{ height: '85%', background: '#38bdf8' }}></span></div>
              </div>
            </div>

            <div className="proper-table-card">
              <div className="table-title">Live Transactions</div>
              <div className="table-row">
                <span className="tr-id">#9042</span>
                <span className="tr-amt">₹3,400</span>
                <span className="tr-status">Paid</span>
              </div>
              <div className="table-row">
                <span className="tr-id">#9041</span>
                <span className="tr-amt">₹1,850</span>
                <span className="tr-status">Paid</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default Web Solutions
    return (
      <div className="proper-ui-container proper-business-ui">
        {/* Nav Header */}
        <div className="proper-nav-row">
          <div className="proper-brand-logo">
            <span className="brand-dot" style={{ background: '#ff6b00' }}></span>
            <span className="logo-text">Villupuram Dev</span>
          </div>
          <div className="proper-nav-links">
            <span>Solutions</span>
            <span>Speed</span>
            <span>Work</span>
          </div>
          <span className="proper-mini-btn">Launch</span>
        </div>

        {/* Hero Banner */}
        <div className="proper-hero-banner">
          <div className="proper-hero-left">
            <div className="proper-badge-tag">⚡ REACT 19 SPA</div>
            <div className="proper-h1-text">Modern Web Architecture</div>
            <div className="proper-p-text">Sub-300ms ultra-speed platforms.</div>
            <div className="proper-btn-group">
              <span className="proper-btn-primary">Explore Demo</span>
              <span className="proper-btn-outline">Services</span>
            </div>
          </div>
          <div className="proper-hero-right">
            <div className="proper-score-card">
              <div className="score-num">100</div>
              <div className="score-lbl">LIGHTHOUSE</div>
            </div>
          </div>
        </div>

        {/* 3 Bottom Feature Pills */}
        <div className="proper-features-grid">
          <div className="proper-feature-card">
            <span className="f-icon">🚀</span>
            <span className="f-title">Sub-300ms Speed</span>
          </div>
          <div className="proper-feature-card">
            <span className="f-icon">🔒</span>
            <span className="f-title">Cloudflare SSL</span>
          </div>
          <div className="proper-feature-card">
            <span className="f-icon">📈</span>
            <span className="f-title">Google Rank #1</span>
          </div>
        </div>
      </div>
    );
  };

  /* Render Slide-Specific Mobile Phone Skeleton UI (Shown for first 1s) */
  const renderMobileSkeleton = (type) => {
    if (type === 'mobile') {
      return (
        <div className="skeleton-mobile-ui">
          <div className="skeleton-box" style={{ width: '100%', height: '35px', background: 'rgba(34,197,94,0.2)', borderRadius: '4px' }}></div>
          <div className="skeleton-box" style={{ width: '90%', height: '10px' }}></div>
          <div className="skeleton-box" style={{ width: '60%', height: '8px' }}></div>
          <div className="skeleton-box sk-mob-cta" style={{ marginTop: 'auto', background: 'rgba(34,197,94,0.4)' }}></div>
        </div>
      );
    }

    if (type === 'ecommerce') {
      return (
        <div className="skeleton-mobile-ui">
          <div className="skeleton-box" style={{ width: '100%', height: '45px', borderRadius: '4px' }}></div>
          <div className="skeleton-box" style={{ width: '80%', height: '8px' }}></div>
          <div className="skeleton-box" style={{ width: '40%', height: '10px', background: '#ff6b00' }}></div>
          <div className="skeleton-box sk-mob-cta" style={{ marginTop: 'auto' }}></div>
        </div>
      );
    }

    if (type === 'custom') {
      return (
        <div className="skeleton-mobile-ui">
          <div className="skeleton-box" style={{ width: '100%', height: '24px' }}></div>
          <div className="skeleton-box" style={{ width: '100%', height: '45px', background: 'rgba(255,107,0,0.15)' }}></div>
          <div className="skeleton-box" style={{ width: '100%', height: '35px' }}></div>
        </div>
      );
    }

    return (
      <div className="skeleton-mobile-ui">
        <div className="skeleton-box sk-mob-banner"></div>
        <div className="skeleton-box sk-mob-title"></div>
        <div className="skeleton-mob-grid">
          <div className="skeleton-box sk-mob-card"></div>
          <div className="skeleton-box sk-mob-card"></div>
        </div>
        <div className="skeleton-box sk-mob-cta"></div>
      </div>
    );
  };

  /* Render Slide-Specific Mobile Phone Proper UI (Shown after 1s) */
  const renderMobileProperUI = (type) => {
    if (type === 'mobile') {
      return (
        <div className="proper-mobile-ui proper-mob-native">
          <div className="proper-mob-header">
            <span className="mob-brand">⚡ Mobile First</span>
            <span className="mob-status" style={{ color: '#22c55e' }}>60 FPS</span>
          </div>
          <div className="proper-mob-hero" style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34,197,94,0.25)' }}>
            <div className="mob-h1" style={{ color: '#22c55e' }}>Touch Optimized</div>
            <div className="mob-sub">Zero-Lag Viewports</div>
          </div>
          <div className="proper-mob-cards">
            <div className="mob-card">
              <span>📲 PWA App</span>
              <small>Installable</small>
            </div>
            <div className="mob-card">
              <span>⚡ 0.28s</span>
              <small>Mobile Load</small>
            </div>
          </div>
          <div className="proper-mob-cta" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }}>
            Test Live Demo
          </div>
        </div>
      );
    }

    if (type === 'ecommerce') {
      return (
        <div className="proper-mobile-ui proper-mob-ecom">
          <div className="proper-mob-header">
            <span className="mob-brand">🛒 AuraStore</span>
            <span className="mob-cart">Cart: 3</span>
          </div>
          <div className="proper-mob-product">
            <span className="mob-prod-emoji">⌚</span>
            <div className="mob-prod-info">
              <div className="mob-prod-title">Smart Watch Pro</div>
              <div className="mob-prod-price">₹2,499 <del>₹4,999</del></div>
            </div>
          </div>
          <div className="proper-mob-upi-tag">
            <span>🟢 UPI & GPay Ready</span>
          </div>
          <div className="proper-mob-cta" style={{ background: 'linear-gradient(135deg, #ff6b00, #ffa800)' }}>
            ⚡ Instant Buy (1-Click)
          </div>
        </div>
      );
    }

    if (type === 'custom') {
      return (
        <div className="proper-mobile-ui proper-mob-custom">
          <div className="proper-mob-header">
            <span className="mob-brand">📊 Dashboard</span>
            <span className="mob-status">🟢 Online</span>
          </div>
          <div className="mob-kpi-single">
            <span className="kpi-sub">Total Revenue</span>
            <span className="kpi-main">₹4.82 Lakhs</span>
            <span className="kpi-badge">▲ +34.8%</span>
          </div>
          <div className="mob-chart-mini">
            <div className="m-bar" style={{ height: '40%' }}></div>
            <div className="m-bar" style={{ height: '75%', background: '#ff6b00' }}></div>
            <div className="m-bar" style={{ height: '50%' }}></div>
            <div className="m-bar" style={{ height: '90%', background: '#ffa800' }}></div>
            <div className="m-bar" style={{ height: '65%' }}></div>
          </div>
          <div className="proper-mob-cta" style={{ background: '#38bdf8' }}>
            Export PDF
          </div>
        </div>
      );
    }

    return (
      <div className="proper-mobile-ui proper-mob-business">
        <div className="proper-mob-header">
          <span className="mob-brand">⚡ V-DEV</span>
          <span className="mob-status">100/100</span>
        </div>
        <div className="proper-mob-hero">
          <div className="mob-h1">Web Platforms</div>
          <div className="mob-sub">Sub-300ms Speed</div>
        </div>
        <div className="proper-mob-cards">
          <div className="mob-card">
            <span>⚡ 280ms</span>
            <small>Load Speed</small>
          </div>
          <div className="mob-card">
            <span>🏆 #1 Rank</span>
            <small>Google SEO</small>
          </div>
        </div>
        <div className="proper-mob-cta">Get Quote</div>
      </div>
    );
  };

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', height: '100%' }}>
        
        {/* Slides Wrapper */}
        <div className="hero-carousel-wrapper">
          {slidesData.map((slide, index) => {
            const isActive = activeSlide === index;
            const isReversed = index % 2 !== 0;

            return (
              <div 
                key={slide.id} 
                className={`hero-slide-item ${isActive ? 'active' : ''} ${isReversed ? 'slide-reversed' : ''}`}
              >
                {/* Left Slide Info */}
                <div className="hero-content">
                  <h1 className="hero-title">
                    {slide.titleLine1}<br />
                    {slide.titleLine2}<br />
                    <span className="gradient-text">{slide.titleGradient}</span>
                  </h1>
                  
                  <p className="hero-desc">
                    {slide.desc}
                  </p>
                  
                  <div className="hero-actions">
                    <button className="btn btn-primary" onClick={onContactClick}>
                      Start Your Project <ArrowRight className="btn-icon" size={16} />
                    </button>
                    <button className="btn btn-secondary" onClick={scrollToProjects}>
                      View Our Work
                    </button>
                  </div>
                </div>

                {/* Right Slide 3D Visual Mockup */}
                <div className="hero-visual reveal reveal-scale-in">
                  
                  {/* Glowing Backlight Aura */}
                  <div className="hero-visual-glow"></div>

                  {slide.mockupType === 'mobile' ? (
                    /* Dedicated Multi-Device Mobile Website Showcase (No Laptop) */
                    <div className="mobile-only-showcase-container">
                      
                      {/* Left Smartphone (E-Commerce Store Mobile Website) */}
                      <div className="phone-showcase-device phone-left">
                        <div className="phone-device-frame">
                          <div className="phone-notch-bar"></div>
                          <div className="phone-inner-screen">
                            {/* Browser URL Bar */}
                            <div className="mob-browser-bar">
                              <span className="mob-browser-url">🔒 store.villupuramdev.in</span>
                            </div>
                            {/* Mobile Store Navbar */}
                            <div className="mob-web-nav">
                              <span className="mob-web-logo">🛍️ AuraStore</span>
                              <span className="mob-web-badge">Cart (2)</span>
                            </div>
                            {/* Promo Banner */}
                            <div className="mob-store-banner">
                              <span className="mob-sale-chip">⚡ 40% OFF</span>
                              <span className="mob-sale-title">UPI & Razorpay Checkout</span>
                            </div>
                            {/* Product Card */}
                            <div className="mob-store-card">
                              <div className="mob-prod-img">⌚</div>
                              <div className="mob-prod-details">
                                <span className="p-name">Smart Watch Pro</span>
                                <span className="p-price">₹2,499 <small>₹4,999</small></span>
                                <span className="p-status">🟢 In Stock • Fast Dispatch</span>
                              </div>
                            </div>
                            {/* Instant Buy CTA */}
                            <div className="mob-upi-cta">
                              <span>⚡ Instant Buy (1-Click UPI)</span>
                            </div>
                            {/* Bottom Tabbar */}
                            <div className="mob-bottom-tabbar">
                              <span className="active">🏠</span>
                              <span>🔍</span>
                              <span>🛒</span>
                              <span>👤</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Primary Smartphone (Full Realistic Agency Mobile Website) */}
                      <div className="phone-showcase-device phone-center">
                        <div className="phone-device-frame main-phone-frame">
                          <div className="phone-notch-bar"></div>
                          <div className="phone-inner-screen main-mobile-site">
                            
                            {/* Safari / Chrome Mobile Address Bar */}
                            <div className="mob-browser-bar main-bar">
                              <span className="mob-browser-url">🔒 villupuramdeveloper.com</span>
                            </div>

                            {/* Mobile Website Header */}
                            <div className="mob-web-nav main-nav">
                              <div className="mob-brand-badge">
                                <span className="brand-dot-flame">🔥</span>
                                <span className="brand-name">Villupuram Dev</span>
                              </div>
                              <div className="mob-nav-actions">
                                <span className="mob-menu-icon">☰</span>
                              </div>
                            </div>

                            {/* Mobile Website Hero Section */}
                            <div className="mob-site-hero">
                              <span className="mob-hero-pill">⚡ REACT 19 • LIGHTHOUSE 100</span>
                              <h3 className="mob-site-title">
                                We Build Digital Experiences That <span className="accent-orange">Grow Businesses.</span>
                              </h3>
                              <p className="mob-site-desc">
                                Modern high-converting websites engineered for authority & sub-300ms speed.
                              </p>
                              <div className="mob-site-btn-row">
                                <span className="mob-btn-primary">Start Project →</span>
                                <span className="mob-btn-secondary">View Work</span>
                              </div>
                            </div>

                            {/* 2x2 Services Grid inside Mobile Website */}
                            <div className="mob-site-services-grid">
                              <div className="mob-service-card">
                                <span className="m-icon">⚡</span>
                                <span className="m-title">Websites</span>
                                <span className="m-tag">0.3s Load</span>
                              </div>
                              <div className="mob-service-card">
                                <span className="m-icon">🛒</span>
                                <span className="m-title">E-Commerce</span>
                                <span className="m-tag">UPI Ready</span>
                              </div>
                              <div className="mob-service-card">
                                <span className="m-icon">📱</span>
                                <span className="m-title">Mobile UI</span>
                                <span className="m-tag">Fluid 60fps</span>
                              </div>
                              <div className="mob-service-card">
                                <span className="m-icon">📈</span>
                                <span className="m-title">SEO Growth</span>
                                <span className="m-tag">Rank #1</span>
                              </div>
                            </div>

                            {/* Bottom Mobile Sticky Action Bar */}
                            <div className="mob-bottom-tabbar site-bottom-bar">
                              <span className="active" style={{ color: '#ff6b00' }}>🏠 Home</span>
                              <span>⚡ Services</span>
                              <span>📂 Work</span>
                              <span style={{ color: '#22c55e' }}>💬 Contact</span>
                            </div>

                          </div>
                        </div>
                      </div>

                      {/* Right Smartphone (Client Dashboard Mobile Website) */}
                      <div className="phone-showcase-device phone-right">
                        <div className="phone-device-frame">
                          <div className="phone-notch-bar"></div>
                          <div className="phone-inner-screen">
                            {/* Browser URL Bar */}
                            <div className="mob-browser-bar">
                              <span className="mob-browser-url">🔒 app.villupuramdev.in</span>
                            </div>
                            {/* Portal Navbar */}
                            <div className="mob-web-nav">
                              <span className="mob-web-logo">📊 CloudPanel</span>
                              <span className="mob-web-badge" style={{ color: '#22c55e', background: 'rgba(34,197,94,0.15)' }}>Online</span>
                            </div>
                            {/* KPI Metrics Banner */}
                            <div className="mob-store-banner" style={{ background: 'rgba(56,189,248,0.12)', borderColor: 'rgba(56,189,248,0.25)' }}>
                              <span className="mob-sale-chip" style={{ background: '#38bdf8', color: '#000' }}>REVENUE</span>
                              <span className="mob-sale-title" style={{ color: '#ffffff' }}>₹4.82 Lakhs ▲ +34.8%</span>
                            </div>
                            {/* Mini Chart Visual */}
                            <div className="mob-dash-card">
                              <div className="d-label">API Latency: 18ms (Zero Drop)</div>
                              <div className="d-bars">
                                <div style={{ height: '35%' }}></div>
                                <div style={{ height: '75%', background: '#ff6b00' }}></div>
                                <div style={{ height: '50%' }}></div>
                                <div style={{ height: '90%', background: '#22c55e' }}></div>
                                <div style={{ height: '65%', background: '#38bdf8' }}></div>
                              </div>
                            </div>
                            {/* Export Trigger */}
                            <div className="mob-upi-cta" style={{ background: 'linear-gradient(135deg, #38bdf8, #0284c7)' }}>
                              <span>📊 Live Analytics Feed</span>
                            </div>
                            {/* Bottom Tabbar */}
                            <div className="mob-bottom-tabbar">
                              <span>🏠</span>
                              <span className="active" style={{ color: '#38bdf8' }}>📊</span>
                              <span>⚙️</span>
                              <span>👤</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* Standard 3D Laptop + Phone Visual for Other Slides */
                    <div className="mockup-container">
                      
                      {/* 3D Laptop Screen */}
                      <div className="laptop-3d">
                        <div className="laptop-screen">
                          <div className="laptop-screen-content">
                            
                            {/* Browser Window Header */}
                            <div className="screen-header">
                              <div className="screen-dots">
                                <span className="screen-dot dot-red"></span>
                                <span className="screen-dot dot-yellow"></span>
                                <span className="screen-dot dot-green"></span>
                              </div>
                              <div className="screen-address-bar">
                                <Globe size={10} className="address-icon" />
                                <span>{slide.url}</span>
                              </div>
                            </div>

                            {/* Dynamic Body: Skeleton UI (1s) & Proper UI Transition */}
                            <div className="screen-dynamic-body">
                              {/* Layer 1: Skeleton Wireframe */}
                              <div className={`screen-layer skeleton-layer ${isSkeleton ? 'layer-active' : 'layer-hidden'}`}>
                                {renderLaptopSkeleton(slide.mockupType)}
                              </div>

                              {/* Layer 2: Proper Realistic UI */}
                              <div className={`screen-layer proper-layer ${!isSkeleton ? 'layer-active' : 'layer-hidden'}`}>
                                {renderLaptopProperUI(slide.mockupType)}
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="laptop-keyboard"></div>
                      </div>

                      {/* 3D Smartphone Device Mockup */}
                      <div className="phone-3d">
                        <div className="phone-screen">
                          <div className="phone-notch"></div>
                          <div className="phone-dynamic-body">
                            {/* Layer 1: Mobile Skeleton Wireframe */}
                            <div className={`screen-layer skeleton-layer ${isSkeleton ? 'layer-active' : 'layer-hidden'}`}>
                              {renderMobileSkeleton(slide.mockupType)}
                            </div>

                            {/* Layer 2: Mobile Proper Realistic UI */}
                            <div className={`screen-layer proper-layer ${!isSkeleton ? 'layer-active' : 'layer-hidden'}`}>
                              {renderMobileProperUI(slide.mockupType)}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Slide Pagination & Navigation Controls */}
        <div className="hero-slider-controls">
          <button 
            type="button"
            className="hero-nav-arrow-btn prev"
            onClick={handlePrevSlide}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="hero-dots-container">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero-slider-dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            type="button"
            className="hero-nav-arrow-btn next"
            onClick={handleNextSlide}
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
