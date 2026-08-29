import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ConfigProvider, useConfig } from './context/ConfigContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Process from './components/Process';
import VisualShowcase from './components/VisualShowcase';
import LocalBusiness from './components/LocalBusiness';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MaintenanceScreen from './components/MaintenanceScreen';
import AnnouncementBanner from './components/AnnouncementBanner';
import PricingPage from './components/PricingPage';
import { trackLiveVisit, startVisitorHeartbeat } from './utils/visitorTracker';

const AdminPanel = lazy(() => import('./components/AdminPanel'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));

function AppContent({ currentRoute, setCurrentRoute, onNavigateHome, onNavigatePricing }) {
  const { config } = useConfig();
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Start real-time active visitor heartbeat for live counting
  useEffect(() => {
    if (currentRoute !== 'admin') {
      const stopHeartbeat = startVisitorHeartbeat();
      return stopHeartbeat;
    }
  }, [currentRoute]);

  // Scroll to top on route change & record live visitor telemetry
  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentRoute !== 'admin') {
      trackLiveVisit(currentRoute === 'pricing' ? '/pricing' : '/');
    }
  }, [currentRoute]);

  // IntersectionObserver for Scroll Reveal animations on public site
  useEffect(() => {
    if (currentRoute === 'admin' || config?.maintenance?.enabled) return;

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [currentRoute, config?.maintenance?.enabled]);

  // Active section tracking on Home Page
  useEffect(() => {
    if (currentRoute !== 'home' || config?.maintenance?.enabled) return;

    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute, config?.maintenance?.enabled]);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  // 1. If on /admin or #admin route, render the Admin Console
  if (currentRoute === 'admin') {
    return (
      <Suspense fallback={<div className="standalone-admin-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b00', fontWeight: 800 }}>Loading Console...</div>}>
        <AdminPanel onNavigateHome={onNavigateHome} />
      </Suspense>
    );
  }

  // 2. If Maintenance Mode is enabled (and not in admin mode), render Maintenance Screen
  if (config?.maintenance?.enabled) {
    return (
      <MaintenanceScreen 
        onAdminAccess={() => {
          setCurrentRoute('admin');
          window.location.hash = '#admin';
        }} 
      />
    );
  }

  // 3. Dedicated Standalone Pricing Page (/pricing or #pricing)
  if (currentRoute === 'pricing') {
    if (config?.pricingSettings?.enableStandalonePage === false) {
      // If standalone page is disabled, redirect back to home
      return (
        <div className="pricing-standalone-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
          <div className="card-header-tag" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)', marginBottom: '1.5rem' }}>
            <span>PAGE DISABLED BY ADMINISTRATOR</span>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Standalone Pricing Page Disabled</h2>
          <p style={{ color: '#94a3b8', maxWidth: '500px', marginBottom: '2rem' }}>
            The dedicated pricing page is currently turned off in the admin console.
          </p>
          <button type="button" className="btn btn-primary" onClick={onNavigateHome}>
            <span>← Return to Home Page</span>
          </button>
        </div>
      );
    }

    return (
      <>
        <PricingPage 
          onNavigateHome={onNavigateHome} 
          onContactClick={openContact} 
        />
        <Suspense fallback={null}>
          {contactOpen && <ContactForm isOpen={contactOpen} onClose={closeContact} />}
          <ChatWidget />
        </Suspense>
      </>
    );
  }

  // 4. Normal Public Home Page
  return (
    <>
      <AnnouncementBanner />
      
      <div className="grid-bg-container">
        <div className="grid-bg"></div>
        <div className="grid-radial-glow"></div>
        <div className="grid-radial-glow-2"></div>
      </div>

      <Navbar 
        onContactClick={openContact} 
        activeSection={activeSection} 
        onNavigatePricing={onNavigatePricing}
      />
      
      <main>
        <Hero onContactClick={openContact} />
        <TrustIntro />
        <Services onContactClick={openContact} />
        {config?.pricingSettings?.showOnHomePage !== false && (
          <Pricing onContactClick={openContact} />
        )}
        <WhyChooseUs />
        <Projects onContactClick={openContact} />
        <Process />
        <VisualShowcase onContactClick={openContact} />
        <LocalBusiness onContactClick={openContact} />
        <Testimonials onContactClick={openContact} />
        <About />
        <ContactSection />
      </main>

      <Footer onContactClick={openContact} />

      <Suspense fallback={null}>
        {contactOpen && <ContactForm isOpen={contactOpen} onClose={closeContact} />}
        <ChatWidget />
      </Suspense>
    </>
  );
}

export default function App() {
  const getInitialRoute = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path.startsWith('/admin') || hash === '#admin') return 'admin';
    if (path.startsWith('/pricing') || hash === '#pricing-page' || hash === '#pricing') return 'pricing';
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleLocationCheck = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.startsWith('/admin') || hash === '#admin') {
        setCurrentRoute('admin');
      } else if (path.startsWith('/pricing') || hash === '#pricing-page' || hash === '#pricing') {
        setCurrentRoute('pricing');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handleLocationCheck);
    window.addEventListener('hashchange', handleLocationCheck);

    // Keyboard shortcut (Ctrl+Shift+A) for admin access
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setCurrentRoute(prev => {
          const next = prev === 'admin' ? 'home' : 'admin';
          if (next === 'admin') {
            window.location.hash = '#admin';
          } else {
            window.history.pushState('', document.title, '/');
          }
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handleLocationCheck);
      window.removeEventListener('hashchange', handleLocationCheck);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigateToHome = () => {
    setCurrentRoute('home');
    window.history.pushState('', document.title, '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPricing = () => {
    setCurrentRoute('pricing');
    window.history.pushState('', document.title, '/pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ConfigProvider>
      <AppContent 
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        onNavigateHome={navigateToHome}
        onNavigatePricing={navigateToPricing}
      />
    </ConfigProvider>
  );
}
