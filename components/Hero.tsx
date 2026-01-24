import React from 'react';
import { Play, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder / Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-brand-black to-brand-black z-0" />
      <div className="absolute inset-0 opacity-20 z-0" 
           style={{ 
             backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }} 
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-md">
          <span className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">Visual Excellence</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight">
          ELEKTRO
          <span className="relative inline-block text-brand-blue ml-2 md:ml-4">
             VISUAL
             <span className="absolute inset-0 animate-glitch opacity-50 text-white mix-blend-overlay" aria-hidden="true">VISUAL</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          Specializing in high-impact social media content and premium real estate cinematography. We turn static ideas into electric motion.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#my-work" 
            className="group relative px-8 py-4 bg-white text-brand-black font-bold text-sm tracking-wider uppercase overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work <Play size={16} fill="currentColor" />
            </span>
            <div className="absolute inset-0 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">
               View Work <Play size={16} fill="currentColor" />
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 border border-white/20 hover:border-brand-blue text-white hover:text-brand-blue font-bold text-sm tracking-wider uppercase transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;