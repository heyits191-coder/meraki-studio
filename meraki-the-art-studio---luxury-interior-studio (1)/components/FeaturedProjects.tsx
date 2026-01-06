
import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  size: 'large' | 'medium';
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Zenith Penthouse",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000",
    size: 'large'
  },
  {
    id: 2,
    title: "Serene Minimalist Villa",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200",
    size: 'medium'
  },
  {
    id: 3,
    title: "Aura Boutique Studio",
    location: "Lucknow",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    size: 'medium'
  }
];

const ProjectCard: React.FC<{ project: Project; delay: number; isVisible: boolean }> = ({ project, delay, isVisible }) => (
  <div 
    className={`relative overflow-hidden group cursor-pointer transition-all duration-[2s] ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    } ${project.size === 'large' ? 'col-span-1 lg:col-span-2 aspect-[16/10] lg:aspect-[21/9]' : 'col-span-1 aspect-[4/5] lg:aspect-[4/5]'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover animate-slow-pan group-hover:scale-110 transition-transform duration-[4s]"
      />
    </div>

    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-[1s]" />

    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-all duration-[1s] translate-y-10 group-hover:translate-y-0">
      <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 mb-2 animate-luxury-breath">
        {project.location}
      </span>
      <h3 className="text-2xl md:text-4xl font-serif text-white tracking-wide animate-luxury-breath" style={{ animationDelay: '0.2s' }}>
        {project.title}
      </h3>
    </div>
  </div>
);

const FeaturedProjects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="our-work"
      className="py-24 md:py-40 bg-[#F9F7F2]"
    >
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="mb-20 md:mb-32 text-center md:text-left">
          <span className={`inline-block text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/50 mb-6 transition-all duration-[1.5s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-luxury-breath`}>
            Our Work
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-8 transition-all duration-[1.5s] delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-luxury-breath`}>
            Selected Interior Projects
          </h2>
          <p className={`text-[#4A4A4A] font-light text-base md:text-lg max-w-lg transition-all duration-[1.5s] delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A glimpse into our design philosophy through carefully crafted spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <ProjectCard 
            project={projects[0]} 
            delay={500} 
            isVisible={isVisible} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:col-span-2">
            <ProjectCard 
              project={projects[1]} 
              delay={700} 
              isVisible={isVisible} 
            />
            <ProjectCard 
              project={projects[2]} 
              delay={900} 
              isVisible={isVisible} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;