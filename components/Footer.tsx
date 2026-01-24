import React from 'react';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            ELEKTRO<span className="text-brand-blue">VISUAL</span>
          </h2>
          <p className="text-brand-white/40 max-w-xs mb-6">
            Pushing the boundaries of digital storytelling through motion and innovation.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-colors text-white/60">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-colors text-white/60">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
           <div>
             <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h3>
             <div className="space-y-3">
               <a href="mailto:hello@elektrovisual.com" className="flex items-center gap-3 text-brand-white/60 hover:text-brand-blue transition-colors">
                 <Mail size={18} />
                 hello@elektrovisual.com
               </a>
               <div className="flex items-center gap-3 text-brand-white/60">
                 <Phone size={18} />
                 +1 (555) 000-0000
               </div>
             </div>
           </div>
        </div>
      </div>
      <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-brand-white/30">
        © {new Date().getFullYear()} Elektrovisual. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
