import React, { useState, useEffect, lazy, Suspense } from 'react';
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
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const ContactForm = lazy(() => import('./components/ContactForm'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // IntersectionObserver for Scroll Reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Stop tracking once revealed
        }
      });
    }, {
      threshold: 0.12, // trigger when 12% of section is visible
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Section tracker for active navigation highlighting & Scroll Progress
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      // 1. Active section tracking
      const scrollPosition = window.scrollY + 120; // offset height of navbar + margins
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
  }, []);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>

      {/* Premium Tech Background Canvas Overlay */}
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
        <FAQ />
        <FinalCTA onContactClick={openContact} />
      </main>

      <Footer onContactClick={openContact} />

      <Suspense fallback={null}>
        {contactOpen && <ContactForm isOpen={contactOpen} onClose={closeContact} />}
        <ChatWidget />
      </Suspense>
    </>
  );
}
