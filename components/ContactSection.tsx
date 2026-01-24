import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-black relative">
       {/* Background Grid */}
       <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: 'radial-gradient(#0070FF 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} 
       />
       
       <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
             READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">CREATE?</span>
          </h2>
          <p className="text-xl text-brand-white/60 mb-12 max-w-2xl mx-auto">
             Whether you have a fully fleshed-out idea or just a spark of inspiration, let's talk about how we can bring it to life.
          </p>
          
          <a 
            href="mailto:hello@elektrovisual.com" 
            className="inline-flex items-center gap-4 bg-brand-blue hover:bg-brand-darkBlue text-white text-lg font-bold py-6 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(0,112,255,0.3)] hover:shadow-[0_0_60px_rgba(0,112,255,0.5)]"
          >
             <Mail className="w-6 h-6" />
             hello@elektrovisual.com
             <ArrowRight className="w-6 h-6" />
          </a>
       </div>
    </section>
  );
};

export default ContactSection;