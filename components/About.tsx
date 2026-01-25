import React from 'react';
import { Camera, Film, Aperture } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about-me" className="py-24 px-6 bg-brand-black border-t border-white/5 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
       
       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
         <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <Camera className="text-brand-blue mb-4 w-10 h-10" />
                  <span className="text-2xl font-display font-bold text-white mb-1">4K+</span>
                  <span className="text-xs text-brand-white/40 uppercase tracking-widest">Quality</span>
               </div>
               <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <Film className="text-brand-blue mb-4 w-10 h-10" />
                  <span className="text-2xl font-display font-bold text-white mb-1">50+</span>
                  <span className="text-xs text-brand-white/40 uppercase tracking-widest">Projects</span>
               </div>
               <a href="#contact" className="col-span-2 bg-brand-blue p-8 rounded-2xl flex items-center justify-between mt-4 group cursor-pointer overflow-hidden relative">
                  <div className="relative z-10">
                     <span className="block text-2xl font-display font-bold text-white">Let's Shoot</span>
                     <span className="text-white/80 text-sm">Turning concepts into frames</span>
                  </div>
                  <Aperture className="text-white/30 w-16 h-16 absolute right-[-10px] bottom-[-10px] group-hover:rotate-45 transition-transform duration-700" />
               </a>
            </div>
         </div>

         <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
               BEHIND THE <span className="text-brand-blue">LENS</span>
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-6">
               <span className="animate-glitch">Elektrovisual</span> is a creative force aiming to bridge the gap between static imagery and digital fluidity.
            </p>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
               Whether it's a <span className="text-white font-bold">15-second viral reel</span> or a <span className="text-white font-bold">cinematic property tour</span>, we create the content that stops the thumb.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-brand-white/50">Cinematography</div>
               <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-brand-white/50">Editing</div>
               <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-brand-white/50">Color Grading</div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default About;