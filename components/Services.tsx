import React from 'react';
import { Smartphone, Home, Zap, MonitorPlay } from 'lucide-react';

const servicesList = [
  {
    title: "Social Media Shorts",
    description: "High-energy reels and TikToks designed for maximum retention and viral potential.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "group-hover:text-pink-500"
  },
  {
    title: "Real Estate Tours",
    description: "Premium cinematic walkthroughs that highlight property features and elevate listings.",
    icon: <Home className="w-8 h-8" />,
    color: "group-hover:text-brand-blue"
  },
  {
    title: "Brand Commercials",
    description: "Polished promotional videos that tell your brand story and drive conversions.",
    icon: <MonitorPlay className="w-8 h-8" />,
    color: "group-hover:text-purple-500"
  },
  {
    title: "Event Coverage",
    description: "Capturing the energy of moments, from corporate launches to nightlife events.",
    icon: <Zap className="w-8 h-8" />,
    color: "group-hover:text-yellow-400"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">SERVICES</h2>
            <p className="text-brand-white/60 max-w-2xl mx-auto">
               Tailored video solutions for modern brands.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
               <div key={index} className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2">
                  <div className={`mb-6 p-4 bg-brand-black rounded-xl inline-block text-white transition-colors duration-300 ${service.color}`}>
                     {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-brand-white/60 text-sm leading-relaxed">
                     {service.description}
                  </p>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Services;