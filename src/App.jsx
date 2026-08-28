import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ConfigProvider } from './context/ConfigContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Process from './components/Process';
import VisualShowcase from './components/VisualShowcase';
import LocalBusiness from './components/LocalBusiness';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const AdminPanel = lazy(() => import('./components/AdminPanel'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Check if current URL is the isolated /admin or #admin route
  const [isAdminRoute, setIsAdminRoute] = useState(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    return path.startsWith('/admin') || hash === '#admin';
  });

  useEffect(() => {
    const handleLocationCheck = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      setIsAdminRoute(path.startsWith('/admin') || hash === '#admin');
    };

    window.addEventListener('popstate', handleLocationCheck);
    window.addEventListener('hashchange', handleLocationCheck);

    // Keyboard shortcut (Ctrl+Shift+A) for admin access
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminRoute(prev => {
          const next = !prev;
          if (next) {
            window.location.hash = '#admin';
          } else {
            window.history.pushState('', document.title, window.location.pathname);
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

  // IntersectionObserver for Scroll Reveal animations on public site
  useEffect(() => {
    if (isAdminRoute) return;

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
  }, [isAdminRoute]);

  // Active section tracking
  useEffect(() => {
    if (isAdminRoute) return;

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
  }, [isAdminRoute]);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const navigateToHome = () => {
    setIsAdminRoute(false);
    window.history.pushState('', document.title, '/');
  };

  return (
    <ConfigProvider>
      {/* If visiting the separated /admin URL, render the Dedicated Admin Console ONLY */}
      {isAdminRoute ? (
        <Suspense fallback={<div className="standalone-admin-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b00', fontWeight: 800 }}>Loading Console...</div>}>
          <AdminPanel onNavigateHome={navigateToHome} />
        </Suspense>
      ) : (
        /* Public Front-Facing Website */
        <>
          <div className="grid-bg-container">
            <div className="grid-bg"></div>
            <div className="grid-radial-glow"></div>
            <div className="grid-radial-glow-2"></div>
          </div>

          <Navbar onContactClick={openContact} activeSection={activeSection} />
          
          <main>
            <Hero onContactClick={openContact} />
            <TrustIntro />
            <Services onContactClick={openContact} />
            <WhyChooseUs />
            <Projects onContactClick={openContact} />
            <Process />
            <VisualShowcase onContactClick={openContact} />
            <LocalBusiness onContactClick={openContact} />
            <About />
            <ContactSection />
          </main>

          <Footer onContactClick={openContact} />

          <Suspense fallback={null}>
            {contactOpen && <ContactForm isOpen={contactOpen} onClose={closeContact} />}
            <ChatWidget />
          </Suspense>
        </>
      )}
    </ConfigProvider>
  );
}
