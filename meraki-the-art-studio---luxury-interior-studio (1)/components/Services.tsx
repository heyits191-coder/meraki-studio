
import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay: number;
  isVisible: boolean;
  loopDelay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, delay, isVisible, loopDelay }) => (
  <div 
    className={`group flex flex-col items-start transition-all duration-[2s] ease-out transform animate-subtle-float ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}
    style={{ 
      transitionDelay: `${delay}ms`,
      animationDelay: `${loopDelay}s`
    }}
  >
    <div className="w-full aspect-[4/3] overflow-hidden mb-8 rounded-sm shadow-sm relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
    </div>
    
    <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-700 animate-luxury-breath" style={{ animationDelay: `${loopDelay}s` }}>
      {title}
    </h3>
    <p className="text-[#4A4A4A] font-light leading-relaxed text-sm md:text-base max-w-xs transition-opacity group-hover:opacity-100">
      {description}
    </p>
    
    <div className="mt-6 w-8 h-[1px] bg-black/20 transition-all duration-700 group-hover:w-full group-hover:bg-black/60"></div>
  </div>
);

const Services: React.FC = () => {
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

  const services = [
    {
      title: "Residential Interiors",
      description: "Luxury home interiors designed around lifestyle, comfort and timeless aesthetics.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
      loopDelay: 0
    },
    {
      title: "Commercial Interiors",
      description: "Workspaces, offices and retail interiors that combine functionality with refined design.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      loopDelay: 0.5
    },
    {
      title: "Turnkey Solutions",
      description: "End-to-end interior execution from design, materials selection to final handover.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
      loopDelay: 1.0
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="py-24 md:py-40 px-8 md:px-16 bg-[#F9F7F2]"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20 md:mb-32 max-w-2xl">
          <span className={`inline-block text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/50 mb-6 transition-all duration-[1.5s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-luxury-breath`}>
            Our Services
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-8 transition-all duration-[1.5s] delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-luxury-breath`}>
            Thoughtfully crafted <br className="hidden md:block" /> interior solutions
          </h2>
          <p className={`text-[#4A4A4A] font-light text-base md:text-lg max-w-lg transition-all duration-[1.5s] delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            From concept to completion, we design spaces that balance beauty, function and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              delay={400 + (index * 200)}
              isVisible={isVisible}
              loopDelay={service.loopDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;