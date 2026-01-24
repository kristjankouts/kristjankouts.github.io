import React from 'react';
import { Instagram, Home, PlayCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Urban Dynamics",
    category: "Social Media",
    image: "https://picsum.photos/600/800?random=1",
    icon: <Instagram size={20} />
  },
  {
    id: 2,
    title: "Luxe Penthouse",
    category: "Real Estate",
    image: "https://picsum.photos/800/600?random=2",
    icon: <Home size={20} />
  },
  {
    id: 3,
    title: "Street Culture",
    category: "Short Form",
    image: "https://picsum.photos/600/800?random=3",
    icon: <Instagram size={20} />
  },
  {
    id: 4,
    title: "Modern Villa Tour",
    category: "Real Estate",
    image: "https://picsum.photos/800/600?random=4",
    icon: <Home size={20} />
  },
  {
    id: 5,
    title: "Brand Energy",
    category: "Commercial",
    image: "https://picsum.photos/800/800?random=5",
    icon: <PlayCircle size={20} />
  },
  {
    id: 6,
    title: "Night Life",
    category: "Event",
    image: "https://picsum.photos/600/800?random=6",
    icon: <PlayCircle size={20} />
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="my-work" className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-2">MY WORK</h2>
            <div className="h-1 w-20 bg-brand-blue"></div>
          </div>
          <p className="text-brand-white/50 mt-4 md:mt-0 text-sm tracking-wide uppercase">
            Curated motion from 2023-2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white/5 overflow-hidden rounded-lg aspect-[3/4] md:aspect-auto md:h-[400px] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-brand-blue mb-2">
                  {project.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;