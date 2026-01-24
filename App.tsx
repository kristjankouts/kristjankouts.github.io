import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-blue selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold text-white z-50">
            E<span className="text-brand-blue">V</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#my-work" className="text-sm font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">My Work</a>
            <a href="#about-me" className="text-sm font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">About Me</a>
            <a href="#services" className="text-sm font-bold uppercase tracking-widest hover:text-brand-blue transition-colors">Services</a>
            <a href="#contact" className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-sm font-bold uppercase">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-brand-black flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <a href="#my-work" onClick={closeMenu} className="text-2xl font-display font-bold hover:text-brand-blue">MY WORK</a>
            <a href="#about-me" onClick={closeMenu} className="text-2xl font-display font-bold hover:text-brand-blue">ABOUT ME</a>
            <a href="#services" onClick={closeMenu} className="text-2xl font-display font-bold hover:text-brand-blue">SERVICES</a>
            <a href="#contact" onClick={closeMenu} className="text-2xl font-display font-bold text-brand-blue">CONTACT</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;