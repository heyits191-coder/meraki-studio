
import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="the-studio"
      className="py-24 md:py-40 px-8 md:px-16 bg-[#F9F7F2] overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        <div className={`order-2 lg:order-1 flex flex-col items-start transition-opacity duration-[2s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className={`text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/50 mb-8 animate-luxury-breath`}>
            About The Studio
          </span>

          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-10 transition-all duration-[2s] delay-200 animate-luxury-breath ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Transforming spaces into <br className="hidden md:block" /> works of living art
          </h2>

          <div className={`space-y-6 max-w-lg transition-all duration-[2s] delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg font-light">
              <strong>Meraki The Art Studio</strong> is an architectural interior design firm dedicated to helping homeowners and businesses design stylish, functional, and highly personalized environments. 
            </p>
            <p className="text-[#4A4A4A] leading-relaxed text-base md:text-lg font-light">
              With over <strong>100 successful projects</strong>, we combine technical precision with an artistic soul, ensuring every corner of your space serves a purpose while exuding elegance.
            </p>
          </div>

          <div className={`mt-12 transition-all duration-[2s] delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative text-[11px] uppercase tracking-[0.3em] font-medium py-3">
              Explore Our Design Philosophy
              <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>
        </div>

        <div className={`order-1 lg:order-2 transition-all duration-[2.5s] ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1500" 
              alt="Luxury Interior Studio View" 
              className="w-full h-full object-cover animate-slow-pan"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
          <div className="mt-6 flex justify-end">
             <span className="text-[9px] uppercase tracking-[0.4em] text-black/30 font-light italic animate-pulse">
               100+ Projects Completed — Artistic Excellence
             </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
