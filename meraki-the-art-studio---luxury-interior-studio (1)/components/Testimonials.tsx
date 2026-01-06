
import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  project: string;
  loopDelay: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Dheeraj Designs transformed our home into a beautifully functional and elegant space. Every detail was handled with precision and a clear understanding of our lifestyle.",
    name: "Arjun Mehta",
    project: "Residential Interior – Lucknow",
    loopDelay: 0
  },
  {
    id: 2,
    text: "The studio's approach to minimalist luxury is unmatched. They managed to create a workspace that is both professional and inspiringly calm. Highly recommended.",
    name: "Sanya Kapoor",
    project: "Boutique Office – New Delhi",
    loopDelay: 0.8
  },
  {
    id: 3,
    text: "From the first consultation to the final handover, the process was seamless. Their eye for materials and light really brought our vision to life in ways we didn't expect.",
    name: "Vikram Singh",
    project: "Modern Villa – Mumbai",
    loopDelay: 1.6
  },
  {
    id: 4,
    text: "An absolute pleasure to work with. They have a unique talent for balancing architectural rigor with warm, livable aesthetics. Our penthouse feels like a sanctuary.",
    name: "Priya Sharma",
    project: "Penthouse – Lucknow",
    loopDelay: 2.4
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number; isVisible: boolean }> = ({ testimonial, index, isVisible }) => {
  // Staggered entrance: cards slide up from slightly different depths
  const entranceDelay = 300 + (index * 200);
  
  return (
    <div 
      className={`bg-white p-10 md:p-14 transition-all duration-[2.5s] ease-[cubic-bezier(0.22,1,0.36,1)] transform border border-black/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.02)] group hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
          : 'opacity-0 translate-y-32 scale-95 rotate-1'
      }`}
      style={{ 
        transitionDelay: `${entranceDelay}ms`
      }}
    >
      {/* Decorative background element that grows on hover */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F9F7F2] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-0 group-hover:scale-150 -z-0"></div>

      <div className="relative z-10">
        <div className="text-5xl font-serif text-black/5 leading-none mb-8 transition-transform duration-700 group-hover:-translate-y-2 group-hover:text-black/10 select-none">
          “
        </div>
        
        <p className="text-[#4A4A4A] font-light leading-relaxed text-lg md:text-xl mb-12 italic tracking-wide">
          {testimonial.text}
        </p>
        
        <div className="flex items-center space-x-6">
          <div className="w-10 h-[1px] bg-black/10 transition-all duration-700 group-hover:w-16 group-hover:bg-black"></div>
          <div className="flex flex-col">
            <span className="text-black font-medium tracking-widest text-xs md:text-sm uppercase mb-1">
              {testimonial.name}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-black/30 font-light">
              {testimonial.project}
            </span>
          </div>
        </div>
      </div>

      {/* Infinite floating subtle animation - applied after entrance */}
      <div 
        className={`absolute inset-0 pointer-events-none ${isVisible ? 'animate-subtle-float' : ''}`}
        style={{ animationDelay: `${testimonial.loopDelay}s` }}
      ></div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before the section fully enters
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="py-32 md:py-48 px-8 md:px-16 bg-[#F9F7F2] relative overflow-hidden"
    >
      {/* Background Decorative Large Text - Parallax-like floating */}
      <div className="absolute top-20 right-[-10%] text-[20vw] font-serif text-black/[0.01] select-none pointer-events-none uppercase tracking-tighter leading-none animate-luxury-breath">
        Voices
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="mb-24 md:mb-36 max-w-3xl">
          <div className={`transition-all duration-[1.5s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.5em] text-black/40 mb-8 animate-luxury-breath">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-10 text-black tracking-tight animate-luxury-breath" style={{ animationDelay: '0.4s' }}>
              Exceptional spaces, <br className="hidden lg:block" /> unmatched experiences
            </h2>
            <div className={`w-24 h-[1px] bg-black/10 mb-10 transition-all duration-[2s] delay-700 ${isVisible ? 'w-48 bg-black/30' : 'w-0'}`}></div>
            <p className="text-[#4A4A4A] font-light text-lg md:text-xl max-w-xl leading-relaxed opacity-80">
              We pride ourselves on the relationships we build. Here is how our clients describe their journey with Dheeraj Designs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Call to Action at bottom of testimonials */}
        <div className={`mt-24 md:mt-32 flex justify-center transition-all duration-[2s] delay-[1.5s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#contact" className="group flex flex-col items-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 group-hover:text-black transition-colors">Start Your Project</span>
            <div className="w-[1px] h-12 bg-black/10 group-hover:h-20 transition-all duration-700 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-black/40 animate-[scrollSlide_2s_infinite]"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
